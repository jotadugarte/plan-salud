
    // ===== RECIPE DATA =====
    const recipes = {
      'huevos-revueltos': {
        nombre: 'Huevos revueltos', tiempo: '8 min', porciones: 1,
        ingredientes: ['2 huevos (o 3 claras + 1 yema)', 'Pizca de sal', 'Spray o ½ tsp aceite', 'Opcional: cebolla, pimiento, espinaca picada'],
        pasos: ['Calentar sartén antiadherente a fuego medio con una gota de aceite o spray.', 'Batir los huevos en un tazón con una pizca de sal.', 'Verter en la sartén y revolver suavemente con espátula de silicona.', 'Retirar cuando estén cocidos pero aún un poco húmedos — no sobrecocinar o quedan gomosos.', 'Si agregás vegetales, saltearlos 2 min antes de agregar el huevo.'],
        nota: 'Para más proteína y menos grasa, usar 3 claras + 1 yema completa.'
      },
      'avena-basica': {
        nombre: 'Avena básica (y batido)', tiempo: '8 min', porciones: 1,
        ingredientes: ['½ taza avena en hojuela', '1 taza leche descremada o agua', '1 fruta (banano, manzana o papaya picada)', '1 tsp semillas de chía (opcional)', 'Sin azúcar o mínima'],
        pasos: ['Colocar avena y leche en una olla pequeña.', 'Cocinar a fuego medio revolviendo constantemente.', 'Cuando espese (4–5 min), retirar del fuego.', 'Agregar la fruta picada encima.', 'Para batido: licuar avena cruda + banano + leche descremada hasta que sea homogéneo.'],
        nota: 'La fruta endulza suficiente. Si la avena no sabe a nada, agregar una pizca de canela.'
      },
      'huevos-cocidos': {
        nombre: 'Huevos cocidos / pochados', tiempo: '10 min', porciones: 1,
        ingredientes: ['2 huevos', 'Agua suficiente para cubrirlos', 'Pizca de sal y vinagre blanco (para pochados)'],
        pasos: ['COCIDOS: Colocar huevos en agua fría. Llevar a ebullición.', 'Una vez que hierva: 7 minutos para yema blanda, 10 minutos para yema dura.', 'Pasar a agua con hielo para detener la cocción. Pelar.', 'POCHADOS: En una olla pequeña, calentar agua con un chorro de vinagre sin que hierva fuerte.', 'Crear un remolino suave con una cuchara. Cascar el huevo en un tazón y deslizarlo al centro del remolino.', 'Cocinar 3 minutos. Retirar con espumadera.'],
        nota: 'Los pochados son más difíciles — si no salen bien, los cocidos funcionan igual de bien.'
      },
      'gallo-pinto': {
        nombre: 'Gallo pinto', tiempo: '15 min', porciones: 2,
        ingredientes: ['1 taza arroz blanco cocido (del día anterior)', '1 taza frijoles negros cocidos con su caldo (½ taza)', '½ cebolla picada fina', '2 dientes de ajo picados', '1 tsp aceite', 'Cilantro al gusto', 'Sal muy poca — los frijoles ya tienen'],
        pasos: ['Calentar aceite en sartén grande a fuego medio.', 'Sofreír la cebolla y el ajo 3 minutos hasta que doren.', 'Agregar el arroz y mezclar bien con la cebolla.', 'Agregar los frijoles con ½ taza del caldo negro.', 'Mezclar y cocinar 5 minutos hasta que el arroz tome el color oscuro de los frijoles.', 'Agregar cilantro picado al final. Ajustar sal muy despacio — poco o nada.'],
        nota: 'El gallo pinto queda mejor con arroz del día anterior. Hacer de más cuando cocinés arroz.'
      },
      'pechuga-plancha': {
        nombre: 'Pechuga/bistec a la plancha', tiempo: '20 min', porciones: 1,
        ingredientes: ['1 pechuga de pollo (150-200g) o bistec delgado', 'Jugo de 1 limón', '2 dientes de ajo machacados', 'Orégano al gusto', 'Sal muy poca', 'Spray o ½ tsp aceite'],
        pasos: ['Marinar la pechuga con limón, ajo, orégano y poca sal. Mínimo 15 minutos — si podés, desde la mañana en el refri.', 'Calentar sartén o plancha a fuego alto.', 'Cocinar la pechuga 5–6 minutos por lado sin moverla constantemente. Esperar a que se forme una costra dorada.', 'La pechuga está lista cuando al cortarla el centro ya no está rosado.', 'Reposar 2 minutos antes de cortar — retiene los jugos.'],
        nota: 'La marinada de limón y ajo reemplaza la sal y da sabor sin sodio extra. Ideal para la hipertensión.'
      },
      'tilapia-horno': {
        nombre: 'Tilapia al horno', tiempo: '25 min', porciones: 1,
        ingredientes: ['1 filete de tilapia (150–200g)', 'Jugo de 1 limón', '3 dientes de ajo laminados', '1 tsp aceite de oliva', 'Pimienta negra', 'Orégano o tomillo', 'Sal muy poca'],
        pasos: ['Precalentar horno a 180°C (350°F).', 'Colocar el filete en papel aluminio o en molde.', 'Mezclar limón, ajo, aceite y especias. Verter sobre el pescado.', 'Cerrar el papel aluminio o cubrir el molde.', 'Hornear 18–20 minutos. Si usás papel aluminio sellado, queda más jugoso.', 'Estará listo cuando la carne se desmenuce fácilmente con un tenedor.'],
        nota: 'La tilapia es la proteína más barata y completa del plan. Comprarla congelada sale más económico.'
      },
      'carne-molida': {
        nombre: 'Carne molida guisada', tiempo: '25 min', porciones: 2,
        ingredientes: ['250g carne molida (preferiblemente de res magra)', '1 tomate picado', '½ cebolla picada', '2 dientes de ajo picados', '½ pimiento rojo o verde picado', 'Comino, orégano al gusto', 'Sal muy poca', '1 tsp aceite'],
        pasos: ['Calentar aceite en sartén a fuego medio.', 'Sofreír cebolla, ajo y pimiento 3 minutos.', 'Agregar la carne molida y desmenuzarla bien con la cuchara.', 'Cocinar revolviendo hasta que toda la carne cambie de color (8–10 min).', 'Agregar el tomate, comino y orégano.', 'Cocinar 5 minutos más. Poca sal al final.'],
        nota: 'Hacer el doble y guardar en refri. Sirve para 2 días de almuerzo o para rellenar un sándwich.'
      },
      'sopa-pollo-verduras': {
        nombre: 'Sopa de pollo con verduras', tiempo: '45 min', porciones: 4,
        ingredientes: ['1 pechuga de pollo entera o 2 muslos sin piel', '2 chayotes pelados y en cubos', '2 zanahorias en rodajas', '1 papa pequeña (opcional en fase 3)', '2 tallos de apio', '½ cebolla', '3 dientes de ajo', 'Cilantro y culantro coyote', 'Sal muy poca', 'Agua: 2 litros'],
        pasos: ['Poner el pollo en agua fría en olla grande. Llevar a ebullición.', 'Espumar: quitar la espuma que sube al principio.', 'Agregar cebolla, ajo entero, apio. Cocinar 20 min.', 'Sacar el pollo, desmenuzar y regresar a la olla.', 'Agregar chayote, zanahoria y papa. Cocinar 15 min más.', 'Agregar cilantro y culantro al final. Ajustar sal con cuidado.'],
        nota: 'Hacer en olla grande — dura 3–4 días en el refri. El caldo de pollo casero es anti-inflamatorio y muy hidratante.'
      },
      'sopa-lenteja': {
        nombre: 'Sopa de lenteja roja', tiempo: '30 min', porciones: 3,
        ingredientes: ['1 taza lenteja roja (se consigue en el supermercado)', '1 zanahoria picada', '½ cebolla picada', '2 dientes de ajo', '1 tomate picado', 'Comino y cúrcuma (opcional)', 'Sal muy poca', '1 litro de agua'],
        pasos: ['Remojar la lenteja 20 min en agua fría (opcional para la roja — se cocina rápido de todas formas).', 'Sofreír cebolla y ajo en olla con 1 tsp aceite.', 'Agregar zanahoria y tomate. Cocinar 3 min.', 'Agregar lenteja y agua. Llevar a ebullición.', 'Cocinar 20 min a fuego medio-bajo hasta que la lenteja esté blanda.', 'Agregar comino y poca sal.'],
        nota: 'La lenteja roja se deshace sola y da textura cremosa sin necesidad de licuar. Muy alta en proteína vegetal.'
      },
      'pollo-desmenuzado': {
        nombre: 'Pollo desmenuzado guisado', tiempo: '30 min', porciones: 2,
        ingredientes: ['2 pechugas de pollo', '½ cebolla', '2 tomates picados', '1 pimiento rojo', '3 dientes de ajo', 'Comino, achiote (bijol), orégano', 'Sal muy poca', '1 tsp aceite'],
        pasos: ['Cocinar las pechugas en agua con cebolla y ajo 20 minutos.', 'Sacar y desmenuzar con dos tenedores.', 'En sartén con aceite, sofreír cebolla, ajo, pimiento y tomate 5 min.', 'Agregar el pollo desmenuzado. Mezclar bien.', 'Agregar poca achiote para el color, comino y orégano.', 'Cocinar 5 min más revolviendo.'],
        nota: 'Hacer doble y congelar la mitad. Perfecto para relleno de sándwich o encima del arroz.'
      },
      'atun-simple': {
        nombre: 'Atún preparado', tiempo: '5 min', porciones: 1,
        ingredientes: ['1 lata atún en agua (no en aceite)', 'Jugo de ½ limón', '1 cdita mayonesa light (opcional, muy poca)', 'Cebollino o cilantro picado', 'Pimienta'],
        pasos: ['Escurrir bien el atún.', 'Mezclar con limón, pimienta y cilantro.', 'Si usás mayonesa, apenas una cdita.', 'Listo para comer solo, sobre arroz, o en un sándwich.'],
        nota: 'El atún en agua tiene más proteína que el de aceite y menos calorías. Revisar sodio — elegir la marca con menos.'
      },
      'sanwich-pollo': {
        nombre: 'Sándwich de pollo', tiempo: '5 min', porciones: 1,
        ingredientes: ['2 rebanadas pan integral', '80–100g pollo desmenuzado o en filete delgado', 'Hojas de lechuga', '1 rodaja de tomate', '¼ aguacate (opcional)', 'Mostaza o jugo de limón (en vez de mayo)'],
        pasos: ['Tostar el pan si preferís.', 'Armar: pan, lechuga, pollo, tomate, aguacate.', 'Condimentar con mostaza o limón en vez de mayonesa.'],
        nota: 'Usar pan integral, no blanco. La diferencia en fibra y saciedad es grande.'
      },
      'pollo-asado': {
        nombre: 'Pollo asado al horno', tiempo: '60 min', porciones: 4,
        ingredientes: ['1 pollo entero o 4 piezas con hueso', '4 dientes de ajo', 'Jugo de 2 limones', 'Orégano, tomillo, pimienta', '1 cda aceite de oliva', 'Sal muy poca'],
        pasos: ['Hacer pequeños cortes en el pollo para que penetre la marinada.', 'Mezclar ajo machacado, limón, aceite y especias. Frotar bien sobre el pollo.', 'Marinar mínimo 1 hora — idealmente toda la noche en el refri.', 'Precalentar horno a 190°C (375°F).', 'Colocar en molde y hornear 45–55 minutos. A mitad del tiempo, voltear.', 'Estará listo cuando el jugo que sale al pinchar sea claro, no rosado.'],
        nota: 'El domingo, hacer doble. Las sobras sirven para desmenuzar y usar en sándwich o sobre arroz el lunes.'
      },
      'olla-carne': {
        nombre: 'Olla de carne costarricense', tiempo: '60 min', porciones: 4,
        ingredientes: ['400g carne de res (costilla o mano) en trozo', '1 chayote pelado y en cubos', '2 zanahorias en trozos', '1 papa pequeña', '1 elote en trozos (opcional)', '¼ de yuca pelada', '½ cebolla, 3 dientes de ajo', 'Culantro coyote, sal mínima', 'Agua: 2 litros'],
        pasos: ['En olla grande, dorar la carne 5 min con un poco de aceite.', 'Agregar cebolla y ajo. Sofreír 2 min.', 'Cubrir con agua fría. Llevar a ebullición y espumar.', 'Cocinar 30 min a fuego medio.', 'Agregar chayote, zanahoria, papa y yuca.', 'Cocinar 20–25 min más hasta que los vegetales estén blandos.', 'Agregar culantro al final.'],
        nota: 'En fase 3, reducir la papa a la mitad y aumentar el chayote y la zanahoria.'
      },
      'arroz-con-pollo': {
        nombre: 'Arroz con pollo casero', tiempo: '40 min', porciones: 3,
        ingredientes: ['2 tazas arroz', '2 pechugas de pollo picadas en cubos', '1 zanahoria picada', '½ taza chícharos (arvejas)', '½ pimiento rojo', '1 tomate picado', '½ cebolla, 3 dientes de ajo', 'Achiote, comino, sal mínima', '3.5 tazas agua o caldo de pollo sin sal'],
        pasos: ['En olla grande, sofreír cebolla, ajo y pimiento en aceite.', 'Agregar el pollo en cubos y dorar.', 'Agregar el tomate y cocinar 3 min.', 'Agregar el arroz y mezclar bien con el sofrito.', 'Agregar agua/caldo, zanahoria, arvejas, achiote y comino.', 'Llevar a ebullición, bajar el fuego al mínimo y tapar.', 'Cocinar 20 min sin destapar. Reposar 5 min.'],
        nota: 'En fase 3, reducir el arroz a 1.5 tazas y agregar más zanahoria y chícharos.'
      },
      'huevos-frijoles-arepa': {
        nombre: 'Huevos con frijoles y arepa', tiempo: '12 min', porciones: 1,
        ingredientes: ['2 huevos', '1 taza frijoles negros cocidos', '1 arepa pequeña o tortilla de maíz', 'Poca sal', '½ tsp aceite'],
        pasos: ['Calentar los frijoles en olla pequeña. Si están muy espesos, agregar un chorrito de agua.', 'En sartén, cocinar los huevos al gusto (fritos, revueltos).', 'Calentar la arepa en plancha seca o microondas 30 segundos.', 'Servir juntos.'],
        nota: 'Esta cena tiene proteína completa (huevo + frijol), carbohidrato moderado y es rápida. Clásico tico equilibrado.'
      },
      'arepa-basica': {
        nombre: 'Arepa básica', tiempo: '15 min', porciones: 3,
        ingredientes: ['1 taza harina de maíz precocida (Maseca o similar)', '1 taza agua tibia', 'Pizca de sal', '½ tsp aceite o spray'],
        pasos: ['Mezclar la harina con el agua tibia y la sal.', 'Amasar 2–3 minutos hasta que la masa no se pegue ni se quiebre.', 'Formar bolitas del tamaño de una pelota de golf y aplastar hasta 1 cm de grosor.', 'Calentar sartén o budare a fuego medio con un poco de aceite.', 'Cocinar 4–5 minutos por lado hasta que forme costra dorada.', 'Están listas cuando al golpearlas suenan huecas.'],
        nota: 'La masa bien hidratada no se quiebra al doblar. Si se quiebra, agregar agua de a poquito. Si se pega, agregar harina de a poquito.'
      },
      'frijoles-negros': {
        nombre: 'Frijoles negros cocidos', tiempo: '90 min (o 30 min en olla a presión)', porciones: 6,
        ingredientes: ['500g frijoles negros secos (o 2 latas ya cocidos)', '1 cebolla entera', '4 dientes de ajo', '1 tallo apio', 'Culantro coyote', 'Sal muy poca al final', 'Agua suficiente para cubrir el doble'],
        pasos: ['Remojar los frijoles en agua fría toda la noche o mínimo 4 horas.', 'Desechar el agua del remojo. Cubrir con agua nueva.', 'Agregar la cebolla entera, ajo y apio.', 'Llevar a ebullición y espumar.', 'Cocinar a fuego medio 60–75 min hasta que estén blandos (o 25 min en olla a presión).', 'Agregar sal y culantro solo al final — la sal antes endurece el frijol.', 'Guardar con su caldo negro — es parte del sabor.'],
        nota: 'Hacer una olla grande el domingo. Duran 5 días en el refri o 3 meses congelados en porciones. El caldo negro es excelente para el gallo pinto.'
      },
      'arroz-integral': {
        nombre: 'Arroz integral básico', tiempo: '40 min', porciones: 3,
        ingredientes: ['1 taza arroz integral', '2 tazas agua', '1 diente de ajo', 'Pizca de sal', '½ tsp aceite'],
        pasos: ['Lavar el arroz hasta que el agua salga casi clara.', 'Sofreír el ajo en el aceite 1 min en la olla.', 'Agregar el arroz y sofreír 2 min revolviendo.', 'Agregar el agua y la pizca de sal.', 'Llevar a ebullición, bajar al mínimo, tapar.', 'Cocinar 35 minutos SIN destapar.', 'Reposar 5 minutos tapado antes de servir.'],
        nota: 'El arroz integral demora más que el blanco. Cocinar de más y guardar en refri — dura 4 días perfectamente y es ideal para el gallo pinto.'
      },
      'ensalada-repollo': {
        nombre: 'Ensalada de repollo y zanahoria', tiempo: '10 min', porciones: 2,
        ingredientes: ['¼ cabeza de repollo rallado fino', '1 zanahoria rallada', 'Jugo de 1 limón', '1 tsp aceite de oliva', 'Pizca de sal', 'Cilantro picado (opcional)', 'Pimienta negra'],
        pasos: ['Rallar el repollo muy finito con cuchillo o mandolina.', 'Rallar la zanahoria.', 'Mezclar en un tazón.', 'Agregar el limón, aceite, sal y pimienta.', 'Mezclar bien y dejar reposar 5 minutos — el limón suaviza el repollo.'],
        nota: 'Muy alta en fibra. El repollo crudo ayuda a la digestión y es muy barato. Esta ensalada se puede preparar para 2 días y guarda bien en el refri.'
      },
      'vegetales-asados': {
        nombre: 'Vegetales asados al horno', tiempo: '35 min', porciones: 3,
        ingredientes: ['1 zanahoria en rodajas gruesas', '1 chayote pelado en cubos', '1 taza brócoli en floretes', '½ cebolla morada en cuartos', '2 cdas aceite de oliva', '3 dientes de ajo', 'Orégano, pimienta', 'Sal muy poca'],
        pasos: ['Precalentar horno a 200°C (390°F).', 'Cortar todos los vegetales en trozos parejos para que se cuezan al mismo tiempo.', 'Mezclar en un tazón grande con aceite, ajo laminado, orégano, pimienta y sal.', 'Extender en bandeja de horno en UNA capa — no amontonarlos o se cocinan al vapor en vez de asarse.', 'Hornear 25–30 minutos. A la mitad, voltear los vegetales.', 'Estarán listos cuando tengan bordes dorados.'],
        nota: 'Hacer el doble el domingo. Los vegetales asados sirven de acompañamiento para 3–4 días. Agregar lo que haya: papa pequeña, batata, pimiento.'
      },
      'batata-asada': {
        nombre: 'Batata (camote) asada', tiempo: '45 min', porciones: 2,
        ingredientes: ['2 batatas medianas', '1 tsp aceite de oliva', 'Canela en polvo (opcional)', 'Pizca de sal'],
        pasos: ['Precalentar horno a 200°C (390°F).', 'Lavar bien las batatas — se pueden dejar con cáscara.', 'Pinchar varias veces con un tenedor.', 'Untar con aceite y una pizca de sal.', 'Colocar en bandeja y hornear 40–45 minutos hasta que al pinchar con cuchillo entre fácil.', 'Opción rápida: microondas 8–10 minutos.'],
        nota: 'La batata asada reemplaza el arroz en la Fase 3. Tiene más fibra y vitaminas que la papa. El toque de canela la hace deliciosa sola.'
      },
      'tortilla-espinaca': {
        nombre: 'Tortilla de espinaca', tiempo: '12 min', porciones: 1,
        ingredientes: ['2 huevos', '1 taza espinaca fresca', '¼ cebolla picada fina', '1 diente de ajo', 'Poca sal', '½ tsp aceite'],
        pasos: ['Saltear la cebolla y el ajo en sartén con aceite 2 min.', 'Agregar la espinaca y cocinar hasta que se reduzca (1–2 min).', 'Batir los huevos con una pizca de sal.', 'Verter los huevos sobre la espinaca en la sartén.', 'Cocinar a fuego medio sin revolver hasta que cuaje por debajo.', 'Doblar a la mitad como una tortilla francesa o servir plana.'],
        nota: 'La espinaca se reduce enormemente al cocinarse — usar más de la que parece necesaria. Alta en hierro y muy baja en calorías.'
      },
      'claras-vegetales': {
        nombre: 'Claras con vegetales salteados', tiempo: '12 min', porciones: 1,
        ingredientes: ['3 claras de huevo', '1 yema', '½ pimiento rojo o verde picado', '1 taza espinaca fresca', '¼ cebolla picada', '1 diente de ajo', 'Poca sal, pimienta', '½ tsp aceite'],
        pasos: ['Saltear cebolla, ajo y pimiento en sartén con aceite 3 min.', 'Agregar la espinaca y cocinar 1 min.', 'Batir las claras con la yema, sal y pimienta.', 'Verter sobre los vegetales.', 'Revolver suavemente como huevos revueltos hasta que cuajen.'],
        nota: 'Usar 3 claras + 1 yema da más proteína con menos grasa que 2 huevos completos. Ideal en la Fase 3 para maximizar proteína.'
      },
      'huevos-pochados-aguacate': {
        nombre: 'Huevos pochados con aguacate', tiempo: '12 min', porciones: 1,
        ingredientes: ['2 huevos', '½ aguacate maduro', '1–2 rebanadas pan integral', 'Jugo de limón', 'Sal muy poca', 'Pimienta y orégano', 'Vinagre blanco (para pochar)'],
        pasos: ['Tostar el pan.', 'Machacar el aguacate con limón, pizca de sal y pimienta.', 'Untar el aguacate sobre el pan tostado.', 'Para los huevos: calentar agua con un chorro de vinagre sin que hierva fuerte.', 'Crear un remolino suave y deslizar el huevo al centro.', 'Cocinar 3 minutos para yema blanda. Sacar con espumadera.', 'Colocar encima del pan con aguacate.'],
        nota: 'Si los huevos pochados son difíciles, los huevos pasados por agua o fritos quedan igual de bien para esta preparación.'
      },
      'bistec-plancha': {
        nombre: 'Bistec delgado a la plancha', tiempo: '15 min', porciones: 1,
        ingredientes: ['150g bistec de res delgado (palomilla o similar)', 'Jugo de 1 limón', '2 dientes de ajo machacados', 'Comino, orégano, pimienta', 'Sal muy poca', '½ tsp aceite'],
        pasos: ['Marinar el bistec con limón, ajo, comino, orégano y pimienta. Mínimo 15 min.', 'Calentar sartén o plancha a fuego MUY alto — tiene que humear un poco.', 'Cocinar el bistec 2–3 min por lado SIN moverlo.', 'No presionar con la espátula — pierde los jugos.', 'Reposar 2 min antes de servir.'],
        nota: 'El secreto del bistec jugoso es la plancha muy caliente y no moverlo. Un bistec delgado bien sellado en sartén caliente es suficiente para el plan.'
      },
      'sanwich-atun': {
        nombre: 'Sándwich integral de atún', tiempo: '5 min', porciones: 1,
        ingredientes: ['2 rebanadas pan integral', '1 lata atún en agua escurrido', '¼ aguacate', 'Hojas de lechuga', '1 rodaja tomate', 'Jugo de limón', 'Pimienta'],
        pasos: ['Escurrir bien el atún. Mezclar con limón y pimienta.', 'Machacar el aguacate con un tenedor.', 'Untar el aguacate en una rebanada de pan.', 'Agregar el atún, lechuga y tomate.', 'Cerrar y servir.'],
        nota: 'Usar el aguacate como "mayonesa" — da cremosidad con grasas saludables. Sin mayonesa industrial.'
      },
      'papa-cocida': {
        nombre: 'Papa cocida', tiempo: '20 min', porciones: 2,
        ingredientes: ['2 papas medianas', 'Agua suficiente', 'Pizca de sal', 'Limón y cilantro para servir'],
        pasos: ['Lavar bien las papas.', 'Colocar en olla con agua fría cubriendo.', 'Llevar a ebullición con poca sal.', 'Cocinar 15–18 min hasta que un cuchillo entre fácil.', 'Escurrir y servir con limón y cilantro.'],
        nota: 'En Fase 3, reducir la papa a 1 unidad y acompañar con más vegetales. La papa cocida tiene menos calorías que la frita y más saciedad que el arroz.'
      },
      'avena-choco': {
        nombre: 'Avena con chía y fruta', tiempo: '8 min', porciones: 1,
        ingredientes: ['½ taza avena en hojuela', '1 taza leche descremada', '1 tsp semillas de chía', '1 fruta picada (banano, manzana o papaya)', 'Canela al gusto'],
        pasos: ['Cocinar la avena con la leche a fuego medio revolviendo 4–5 min.', 'Retirar del fuego y agregar las semillas de chía.', 'Dejar reposar 2 min — la chía absorbe líquido y espesa.', 'Agregar la fruta picada encima.', 'Espolvorear canela.'],
        nota: 'La chía añade fibra y omega-3 sin afectar el sabor. Una cucharadita es suficiente.'
      },
      'batido-proteico': {
        nombre: 'Batido proteico natural', tiempo: '5 min', porciones: 1,
        ingredientes: ['1 taza leche descremada', '½ taza avena cruda', '1 banano maduro', '1 cda mantequilla de maní (sin azúcar)', 'Opcional: 1 tsp semillas de chía'],
        pasos: ['Colocar todos los ingredientes en la licuadora.', 'Licuar 40–60 segundos hasta que sea homogéneo.', 'Si queda muy espeso, agregar un poco más de leche.', 'Tomar inmediatamente.'],
        nota: 'Este batido reemplaza el desayuno cuando no hay tiempo de cocinar. La mantequilla de maní agrega proteína y grasas saludables. Elegir la versión sin azúcar añadida.'
      },
      'ensalada-verde': {
        nombre: 'Ensalada verde mixta', tiempo: '8 min', porciones: 2,
        ingredientes: ['2 tazas lechuga romana picada', '1 tomate en cubos', '½ pepino en rodajas (opcional)', '¼ cebolla morada laminada', 'Jugo de 1 limón', '1 tsp aceite de oliva', 'Sal muy poca, pimienta', 'Cilantro picado'],
        pasos: ['Lavar bien todas las hojas.', 'Picar la lechuga en trozos medianos.', 'Mezclar todos los vegetales en un tazón.', 'Aderezar con limón, aceite, sal y pimienta justo antes de servir.', 'Si se adereza antes, la lechuga se marchita.'],
        nota: 'El aderezo de limón + aceite es el mejor para la hipertensión — sin sodio del vinagre comercial ni azúcar de los aderezos de botella.'
      }
    };

    // ===== SHOPPING LIST DATA =====
    const shopLists = {
      f1: [
        {
          cat: '🥩 Proteínas', items: [
            { name: 'Pechuga de pollo', qty: '600g — para 3 almuerzos y sobrante para desmenuzar' },
            { name: 'Tilapia o filete de pescado', qty: '300g — 1–2 filetes' },
            { name: 'Carne molida de res (magra)', qty: '250g — 1 porción doble' },
            { name: 'Atún en agua', qty: '3 latas de 140g' },
            { name: 'Huevos', qty: '18 unidades — para desayunos y cenas' }
          ]
        },
        {
          cat: '🥦 Vegetales', items: [
            { name: 'Chayote', qty: '3 unidades' },
            { name: 'Brócoli', qty: '1 cabeza mediana' },
            { name: 'Zanahoria', qty: '500g' },
            { name: 'Lechuga romana', qty: '1 cabeza' },
            { name: 'Tomates', qty: '4 unidades' },
            { name: 'Repollo', qty: '½ cabeza' },
            { name: 'Cebolla', qty: '2 unidades' },
            { name: 'Ajo', qty: '1 cabeza' },
            { name: 'Apio', qty: '2 tallos' }
          ]
        },
        {
          cat: '🌾 Carbohidratos', items: [
            { name: 'Arroz integral', qty: '1 kg' },
            { name: 'Harina de maíz para arepas', qty: '500g' },
            { name: 'Pan integral (molde)', qty: '1 bolsa' },
            { name: 'Avena en hojuela', qty: '500g' },
            { name: 'Frijoles negros cocidos (o secos)', qty: '2 latas o 500g secos' }
          ]
        },
        {
          cat: '🍌 Frutas', items: [
            { name: 'Bananos', qty: '8 unidades' },
            { name: 'Manzanas', qty: '4 unidades' },
            { name: 'Fruta de temporada', qty: 'Lo que haya — papaya, piña, sandía' }
          ]
        },
        {
          cat: '🥛 Lácteos', items: [
            { name: 'Leche descremada', qty: '1 litro' },
            { name: 'Aguacate', qty: '2 unidades (maduros)' }
          ]
        },
        {
          cat: '🥤 Bebidas', items: [
            { name: 'Coca Cola Zero', qty: '6-pack o 2 litros (máx 1 lata/día)' },
            { name: 'Agua (si no tenés filtro)', qty: '2 garrafones de 4L' }
          ]
        }
      ],
      f2: [
        {
          cat: '🥩 Proteínas', items: [
            { name: 'Pechuga de pollo', qty: '700g' },
            { name: 'Tilapia', qty: '400g' },
            { name: 'Carne molida magra', qty: '250g' },
            { name: 'Atún en agua', qty: '3 latas' },
            { name: 'Huevos', qty: '18 unidades' },
            { name: 'Lenteja roja', qty: '500g — nueva en fase 2' }
          ]
        },
        {
          cat: '🥦 Vegetales (más variedad)', items: [
            { name: 'Chayote', qty: '3 unidades' },
            { name: 'Brócoli', qty: '1 cabeza' },
            { name: 'Zanahoria', qty: '500g' },
            { name: 'Espinaca fresca', qty: '1 bolsa — nueva' },
            { name: 'Lechuga', qty: '1 cabeza' },
            { name: 'Tomates', qty: '4 unidades' },
            { name: 'Pimiento rojo', qty: '1 unidad' },
            { name: 'Cebolla', qty: '2 unidades' },
            { name: 'Ajo', qty: '1 cabeza' },
            { name: 'Apio', qty: '2 tallos' }
          ]
        },
        {
          cat: '🌾 Carbohidratos', items: [
            { name: 'Arroz integral', qty: '1 kg' },
            { name: 'Harina de maíz', qty: '500g' },
            { name: 'Pan integral', qty: '1 bolsa' },
            { name: 'Avena', qty: '500g' },
            { name: 'Frijoles negros', qty: '2 latas o 400g secos' }
          ]
        },
        {
          cat: '🍌 Frutas + extras', items: [
            { name: 'Bananos', qty: '8 unidades' },
            { name: 'Manzanas', qty: '4 unidades' },
            { name: 'Fruta de temporada', qty: 'A elección' },
            { name: 'Semillas de chía', qty: '100g (rinde mucho)' },
            { name: 'Maní sin sal', qty: '200g' }
          ]
        },
        {
          cat: '🥛 Lácteos', items: [
            { name: 'Leche descremada', qty: '1.5 litros' },
            { name: 'Yogur natural sin azúcar', qty: '2 potes pequeños' },
            { name: 'Aguacate', qty: '2 unidades' }
          ]
        },
        {
          cat: '🥤 Bebidas', items: [
            { name: 'Coca Cola Zero', qty: '6-pack' },
            { name: 'Agua', qty: 'Según necesidad' }
          ]
        }
      ],
      f3: [
        {
          cat: '🥩 Proteínas (alta calidad)', items: [
            { name: 'Pechuga de pollo', qty: '800g' },
            { name: 'Tilapia o salmón (si está al precio)', qty: '400g' },
            { name: 'Carne molida magra', qty: '250g' },
            { name: 'Atún en agua', qty: '4 latas' },
            { name: 'Huevos', qty: '18 unidades — usar más claras' },
            { name: 'Lenteja roja', qty: '400g' }
          ]
        },
        {
          cat: '🥦 Vegetales (abundantes)', items: [
            { name: 'Espinaca', qty: '2 bolsas — protagonista en fase 3' },
            { name: 'Brócoli', qty: '2 cabezas' },
            { name: 'Zanahoria', qty: '600g' },
            { name: 'Chayote', qty: '2 unidades' },
            { name: 'Tomates', qty: '4 unidades' },
            { name: 'Pimiento rojo y verde', qty: '1 de cada uno' },
            { name: 'Lechuga', qty: '1 cabeza' },
            { name: 'Cebolla', qty: '2 unidades' },
            { name: 'Ajo', qty: '1 cabeza' }
          ]
        },
        {
          cat: '🌾 Carbohidratos (reducidos)', items: [
            { name: 'Arroz integral', qty: '800g — menos que antes' },
            { name: 'Harina de maíz', qty: '400g' },
            { name: 'Pan integral', qty: '1 bolsa (consumo reducido)' },
            { name: 'Avena', qty: '500g' },
            { name: 'Batata/camote', qty: '2 unidades — reemplaza parte del arroz' },
            { name: 'Frijoles negros', qty: '2 latas' }
          ]
        },
        {
          cat: '🍌 Frutas y semillas', items: [
            { name: 'Bananos', qty: '6 unidades' },
            { name: 'Manzanas o fruta de temporada', qty: '4 unidades' },
            { name: 'Semillas de chía', qty: '100g' },
            { name: 'Maní sin sal', qty: '200g' },
            { name: 'Nueces (si el presupuesto lo permite)', qty: '100g' }
          ]
        },
        {
          cat: '🥛 Lácteos', items: [
            { name: 'Leche descremada', qty: '1.5 litros' },
            { name: 'Yogur natural sin azúcar', qty: '3 potes' },
            { name: 'Aguacate', qty: '3 unidades' }
          ]
        },
        {
          cat: '🥤 Bebidas', items: [
            { name: 'Coca Cola Zero', qty: '6-pack' },
            { name: 'Agua', qty: 'Según necesidad' }
          ]
        }
      ],
      base: [
        {
          cat: '🫙 Siempre tener en la despensa', items: [
            { name: 'Aceite de oliva o coco', qty: '1 botella pequeña (usar poco)' },
            { name: 'Limones', qty: 'Comprar cada semana — 6 unidades' },
            { name: 'Sal (poca)', qty: '1 paquete dura meses' },
            { name: 'Pimienta negra', qty: '1 frasco' },
            { name: 'Comino en polvo', qty: '1 frasco' },
            { name: 'Orégano seco', qty: '1 frasco' },
            { name: 'Achiote (bijol)', qty: '1 paquete' },
            { name: 'Ajo en polvo (backup del fresco)', qty: '1 frasco' },
            { name: 'Canela (para la avena)', qty: '1 frasco' },
            { name: 'Cúrcuma (antiinflamatoria, para sopas)', qty: '1 frasco' },
            { name: 'Mostaza (en vez de mayonesa)', qty: '1 frasco' },
            { name: 'Vinagre blanco', qty: '1 botella' },
            { name: 'Maní sin sal', qty: 'Siempre tener — para snack de ansiedad' },
            { name: 'Frijoles negros en lata', qty: 'Tener 2–3 latas de reserva' }
          ]
        }
      ]
    };

    // ===== RENDER FUNCTIONS =====

    function renderMenu(panelId) {
      const panel = document.getElementById(panelId);
      if (!panel || panel.dataset.rendered) return;
      const days = JSON.parse(panel.getAttribute('data-days'));

      // Create day tabs
      let tabsHTML = '<div class="sub-tabs" id="dt-' + panelId + '">';
      days.forEach((d, i) => {
        tabsHTML += `<button class="sub-tab${i === 0 ? ' active' : ''}" onclick="showDayPanel('dp-${panelId}-${i}','dt-${panelId}',this)">${d.day}</button>`;
      });
      tabsHTML += '</div>';

      // Create day panels
      let panelsHTML = '';
      days.forEach((d, i) => {
        panelsHTML += `<div id="dp-${panelId}-${i}" class="sub-panel${i === 0 ? ' active' : ''}">`;
        d.meals.forEach(m => {
          const hasRecipe = m.recipe && recipes[m.recipe];
          const rid = m.recipe ? 'rx-' + panelId + '-' + i + '-' + m.recipe : '';
          panelsHTML += `
        <div class="meal-row">
          <div class="meal-icon ${m.cls}">${m.icon}</div>
          <div class="meal-body">
            <div class="meal-lbl">${m.lbl}</div>
            <div class="meal-name">${m.name}</div>
            <div class="meal-desc">${m.desc}</div>
            ${m.note ? `<div class="meal-note">${m.note}</div>` : ''}
            ${hasRecipe ? `<button class="recipe-btn" onclick="toggleRecipe('${rid}',this)">Ver receta</button><div id="${rid}" class="recipe-expand">${buildRecipeHTML(recipes[m.recipe])}</div>` : ''}
          </div>
        </div>`;
        });
        panelsHTML += '</div>';
      });

      panel.innerHTML = tabsHTML + panelsHTML;
      panel.dataset.rendered = 'true';
    }

    function buildRecipeHTML(r) {
      return `
    <div class="recipe-meta">
      <span class="recipe-tag">⏱ ${r.tiempo}</span>
      <span class="recipe-tag">🍽 ${r.porciones} porción${r.porciones > 1 ? 'es' : ''}</span>
    </div>
    <h4>Ingredientes</h4>
    <ul>${r.ingredientes.map(i => `<li>${i}</li>`).join('')}</ul>
    <h4 style="margin-top:10px">Preparación</h4>
    <ol>${r.pasos.map(p => `<li>${p}</li>`).join('')}</ol>
    ${r.nota ? `<div style="margin-top:8px;font-size:12px;color:var(--g900);background:var(--g100);padding:6px 10px;border-radius:8px">💡 ${r.nota}</div>` : ''}`;
    }

    function renderAllRecipes() {
      const container = document.getElementById('all-recipes');
      if (container.dataset.rendered) return;
      let html = '';
      Object.entries(recipes).forEach(([key, r]) => {
        html += `
      <div class="card" style="margin-bottom:1rem">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:10px">
          <div class="title" style="margin:0">${r.nombre}</div>
          <div style="display:flex;gap:6px">
            <span class="badge badge-g">⏱ ${r.tiempo}</span>
            <span class="badge badge-b">🍽 ${r.porciones} porción${r.porciones > 1 ? 'es' : ''}</span>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
          <div>
            <div class="label" style="margin-bottom:6px">Ingredientes</div>
            <ul style="padding-left:1.1rem;font-size:13px;color:var(--text2);line-height:1.7">${r.ingredientes.map(i => `<li>${i}</li>`).join('')}</ul>
          </div>
          <div>
            <div class="label" style="margin-bottom:6px">Preparación</div>
            <ol style="padding-left:1.1rem;font-size:13px;color:var(--text2);line-height:1.7">${r.pasos.map(p => `<li>${p}</li>`).join('')}</ol>
          </div>
        </div>
        ${r.nota ? `<div style="margin-top:10px;font-size:12px;color:var(--g900);background:var(--g100);padding:8px 12px;border-radius:8px">💡 ${r.nota}</div>` : ''}
      </div>`;
      });
      container.innerHTML = html;
      container.dataset.rendered = 'true';
    }

    function renderShopList(fase, containerId) {
      const container = document.getElementById(containerId);
      if (!container || container.dataset.rendered) return;
      const data = shopLists[fase];
      let html = '';
      data.forEach(cat => {
        html += `<div class="shop-cat"><div class="shop-cat-title">${cat.cat}</div>`;
        cat.items.forEach((item, i) => {
          const id = `chk-${containerId}-${i}-${Math.random().toString(36).substr(2, 5)}`;
          html += `<div class="shop-item">
        <input type="checkbox" id="${id}">
        <label for="${id}">${item.name}<span>${item.qty}</span></label>
      </div>`;
        });
        html += '</div>';
      });
      container.innerHTML = html;
      container.dataset.rendered = 'true';
    }

    // ===== NAVIGATION =====
    function showMain(id, btn) {
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.main-nav-btn').forEach(b => b.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      btn.classList.add('active');

      if (id === 'recetas') renderAllRecipes();
      if (id === 'compras') {
        renderShopList('f1', 'list-shop-f1');
        renderShopList('f2', 'list-shop-f2');
        renderShopList('f3', 'list-shop-f3');
        renderShopList('base', 'list-shop-base');
      }
      if (id === 'calendario') window.loadCalendarIfNeeded && window.loadCalendarIfNeeded();
    }

    function showMenuFase(id, btn, tabGroupId) {
      const group = document.getElementById(tabGroupId) || document.querySelector('.sub-tabs');
      group.querySelectorAll('.sub-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('#menu .sub-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById(id);
      panel.classList.add('active');
      renderMenu(id);
    }

    function showSubTab(id, tabGroupId, btn) {
      const group = document.getElementById(tabGroupId);
      group.querySelectorAll('.sub-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const section = group.parentElement;
      section.querySelectorAll('.sub-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(id).classList.add('active');
    }

    function showDayPanel(panelId, tabGroupId, btn) {
      const group = document.getElementById(tabGroupId);
      group.querySelectorAll('.sub-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const parent = group.parentElement;
      parent.querySelectorAll('.sub-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(panelId).classList.add('active');
    }

    function togglePhase(header) {
      const body = header.nextElementSibling;
      body.classList.toggle('open');
    }

    function toggleRecipe(id, btn) {
      const el = document.getElementById(id);
      el.classList.toggle('open');
      btn.classList.toggle('open');
    }

    // Initial render of first menu
    document.addEventListener('DOMContentLoaded', () => {
      renderMenu('f1a');
    });
  
