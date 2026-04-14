require 'fileutils'

view_path = "app/views/dashboard/index.html.erb"
content = File.read(view_path)

sections = [ "ejercicio", "menu", "recetas", "compras", "habitos", "modal-receta", "shopping-list-modal", "menu-dia-modal" ]

rendered_contents = content.clone
new_content = ""

sections.each do |sec|
  # We look for <div id=\"#{sec}\"... to the next <div id=\"... o al final del container
  # To safely extract, it's easier to find the `<!-- ===== #{sec.upcase} ===== -->` markers if they exist.
end

# But the tags in UI are like: <!-- ===== EJERCICIO ===== -->
tags = [
  "EJERCICIO", "MENÚ", "RECETAS", "COMPRAS", "HÁBITOS"
]

header_match = content.match(/\A(.*?)(?=<!-- =====)/m)
if header_match
  new_content += header_match[1]
end

tags.each_with_index do |tag, idx|
  puts "Extracting #{tag}"
  current_marker = "<!-- ===== #{tag} ===== -->"
  next_marker = (idx < tags.length - 1) ? "<!-- ===== #{tags[idx+1]} ===== -->" : "<!-- ===== MODALS ===== -->"
  next_marker = "<!--" if next_marker.nil? && idx == tags.length - 1

  if match = content.match(/#{current_marker}(.*?)#{next_marker}/m)
    partial_name = tag.downcase.gsub('ú', 'u').gsub('á', 'a')
    partial_path = "app/views/dashboard/_#{partial_name}.html.erb"
    File.write(partial_path, current_marker + match[1])
    puts "Wrote #{partial_path}"
    new_content += "<%= render partial: 'dashboard/#{partial_name}' %>\n\n"
  end
end

if match = content.match(/(<!-- ===== MODALS ===== -->.*)/m)
  File.write("app/views/dashboard/_modals.html.erb", match[1])
  new_content += "<%= render partial: 'dashboard/modals' %>\n"
end

# Add stimulus controller globally
new_content.gsub!('<div class="app-container"', '<div class="app-container" data-controller="dashboard"')

File.write("app/views/dashboard/index.html.erb", new_content)
puts "Updated index.html.erb"
