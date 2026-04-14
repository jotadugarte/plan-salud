require 'fileutils'

html = File.read('index.html')

if style_match = html.match(/<style>(.*?)<\/style>/m)
  File.write('app/assets/stylesheets/neumorphism.css', style_match[1])
  puts "[OK] Extracted CSS"
end

if body_match = html.match(/<body[^>]*>(.*?)<\/body>/m)
  body = body_match[1]

  nav_index = body.index('<nav class="main-nav">')
  content_index = body.index('<div class="content">')

  if nav_index && content_index
    # We slice out the header (which has nested divs)
    header_chunk = body[(body.index('<div class="header">') || 0)...nav_index].strip
    nav_chunk = body[nav_index...content_index].strip

    layout_prefix = "#{header_chunk}\n    #{nav_chunk}\n    <div class=\"content\">"

    layout_path = 'app/views/layouts/application.html.erb'
    layout = File.read(layout_path)

    unless layout.include?('class="header"')
      new_layout = layout.sub('<%= yield %>', "#{layout_prefix}\n      <%= yield %>\n    </div>")
      new_layout = new_layout.sub('</head>', "  <%= stylesheet_link_tag 'neumorphism', 'data-turbo-track': 'reload' %>\n  </head>")
      File.write(layout_path, new_layout)
      puts "[OK] Configured app/views/layouts/application.html.erb"
    end

    content_start_idx = content_index + '<div class="content">'.length
    dashboard_content = body[content_start_idx..-1]

    # Clean up inline scripts
    dashboard_content.gsub!(/<script>.*?<\/script>/m, '')

    File.write('app/views/dashboard/index.html.erb', dashboard_content)
    puts "[OK] Dumped dynamic content to app/views/dashboard/index.html.erb"
  else
    puts "[ERR] Structure anchors not found!"
  end
else
  puts "[ERR] Could not parse body!"
end
