!
function Gender(){
			
			if  (document.getElementById('A3').value == "Male"){ $('#Estimad').add('#Estimad2').add('#Estimad3').add('#Estimad4').add('#Estimad5').add('#Estimad6').add('#Estimad7').add('#Estimad8').add('#Estimad9').add('#Estimad10').add('#Estimad11').add('#Estimad12').add('#Estimad13').add('#Estimad14').html("Estimado");}}		
	
		function Gender2(){
			if (document.getElementById('A4').value == "Female"){			$('#Estimad').add('#Estimad2').add('#Estimad3').add('#Estimad4').add('#Estimad5').add('#Estimad6').add('#Estimad7').add('#Estimad8').add('#Estimad9').add('#Estimad10').add('#Estimad11').add('#Estimad12').add('#Estimad13').add('#Estimad14').html("Estimada");}}			
			
		$(function(){ 
            $('#A2').change(function() {
            $('#name').add('#name2').add('#name3').add('#name4').add('#name5').add('#name6').add('#name7').add('#name8').add('#name9').add('#name10').add('#name11').add('#name12').add('#name13').add('#name14').text( $(this).val() );
            });});
		
		$(function(){ 
            $('#A1').change(function() {               $('#SRX').add('#SRX2').add('#SRX3').add('#SRX4').add('#SRX5').add('#SRX6').add('#SRX7').add('#SRX8').add('#SRX9').add('#SRX10').add('#SRX11').add('#SRX12').add('#SRX13').add('#SRX14').add('#SRX15').add('#SRX16').add('#SRX17').add('#SRX18').add('#SRX19').add('#SRX20').text( $(this).val() );
            });});
		
		$(function(){ 
            $('#Hora2').change(function() {
            $('#Hora3').text( $(this).val() );
            });});
		
		$(function(){ 
            $('#Producto2').change(function() {
            $('#Producto3').text( $(this).val() );
            });});
		
		$(function(){ 
            $('#General3').change(function() {
            $('#Contenido2').text( $(this).val() );
            });});
		
		$(function(){ 
            $('#Actiont').change(function() {
            $('#Action2').add('#Action3').add('#Action4').text( $(this).val() );
            });});
		
		$(function(){
            $('#Blockert').change(function() {
            $('#Blocker2').text( $(this).val() );
            });});

		$(function(){ 
            $('#Resolutiont').change(function() {
            $('#Solution2').add('#Solution3').add('#Solution4').text( $(this).val() );
            });});		
		
		$(function(){ 
            $('#Agent1').change(function() {           $('#Agent2').add('#Agent3').add('#Agent4').add('#Agent5').add('#Agent6').add('#Agent7').add('#Agent8').add('#Agent9').add('#Agent10').add('#Agent11').add('#Agent12').add('#Agent13').add('#Agent14').add('#Agent15').add('#Agent16').add('#Agent17').html( $(this).val());});});
		
		$(function(){ 
            $('#Rejoin3').change(function() {
            $('#Rejoin4').html( $(this).val() );
            });});
		
		$(function(){			
			$('#Rejoin3').change(function() {
            $("a.Rejoin5").attr("href", ( $(this).val() ));
            });});
		
	
		function formReset2(myForm) {
			document.getElementById("myForm2").reset();
			$('#SRX').add('#SRX2').add('#SRX3').add('#SRX4').add('#SRX5').add('#SRX6').add('#SRX7').add('#SRX8').add('#SRX9').add('#SRX10').add('#SRX11').add('#SRX12').add('#SRX13').add('#SRX14').add('#SRX15').add('#SRX16').add('#SRX17').add('#SRX18').add('#SRX19').add('#SRX20').text("SRX")
			$('#name').add('#name2').add('#name3').add('#name4').add('#name5').add('#name6').add('#name7').add('#name8').add('#name9').add('#name10').add('#name11').add('#name12').add('#name13').add('#name14').text("Nombre del Usuario")
			$('#Hora3').text("Hora de la llamada")
			$('#Producto3').text("Producto")
			$('#Contenido2').text("Contenido del comunicado")
			$('#Action2').add('#Action3').add('#Action4').text("(Lo que intentaba hacer el usuario cuando se presentaba el inconveniente)")
			$('#Blocker2').text("(Mensaje de error o comportamiento erróneo generado)")
			$('#Solution2').text("(Descripción superficial del procedimiento que permitió solucionar el inconveniente)")
			$('#Solution3').add('#Solution4').text("(Resultado de la interacción)")
			$('#Rejoin4').html("Enlace de Rejoin")		
			$('#Estimad').add('#Estimad2').add('#Estimad3').add('#Estimad4').add('#Estimad5').add('#Estimad6').add('#Estimad7').add('#Estimad8').add('#Estimad9').add('#Estimad10').add('#Estimad11').add('#Estimad12').add('#Estimad13').add('#Estimad14').text("Estimad@")	

		}
				
		
	
		function formReset(myForm) {
			document.getElementById("myForm").reset();
			
				document.getElementById("A5").value = " ";
				document.getElementById('Strike').style.display='none';
				document.getElementById('Producto1').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('Agentshow').style.display='none';
				document.getElementById('SRX0').style.display='none';
				document.getElementById('name0').style.display='none';
				document.getElementById('reset0').style.display='none';
				document.getElementById('Gender0').style.display='none';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';
		}
		

		function Templates(){

			if (document.getElementById('A5').value == "Strike") {
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('Hora1').style.display='table-row';
				document.getElementById('Strike').style.display='Block';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy1').style.display='table-row';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';
				
				
				} 
				else if (document.getElementById('A5').value == "Strike3") {
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('Strike3').style.display='block';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('Action0').style.display='table-row';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='table-row';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy2').style.display='table-row';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementsByName('Resolutiont')[0].placeholder='Resultado de la interacción';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';
				
				
				}
				
				else if (document.getElementById('A5').value == "Resolved") {
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('Action0').style.display='table-row';
				document.getElementById('Blocker0').style.display='table-row';
				document.getElementById('Solucion0').style.display='table-row';
				document.getElementById('Resolved').style.display='block';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy3').style.display='table-row';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementsByName('Resolutiont')[0].placeholder='Solución superficial';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';
				
				
				}
					
				else if (document.getElementById('A5').value == "Unresolved") {
				document.getElementById('Unresolved').style.display='Block';
				document.getElementById('SRX0').style.display='table-row';					
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy4').style.display='table-row';
				document.getElementById('Action0').style.display='table-row';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='table-row';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Ghost').style.display='none';	
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementsByName('Resolutiont')[0].placeholder='Resultado de la interacción';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';

				
				}					
					
				else if (document.getElementById('A5').value == "Ghost") {
				document.getElementById('Ghost').style.display='Block';
				document.getElementById('SRX0').style.display='table-row';	
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='none';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='none';
				document.getElementById('Copy5').style.display='table-row';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';
				

				
				}
					
				else if (document.getElementById('A5').value == "General") {
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('General2').style.display='table-row';
				document.getElementById('General').style.display='block';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Strike3').style.display='none';				
				document.getElementById('Clave').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy6').style.display='table-row';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';
				
				
				
				}
					
				else if (document.getElementById('A5').value == "Rejoin") {
				document.getElementById('Rejoin').style.display='Block';
				document.getElementById('Rejoin2').style.display='table-row';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='none';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='none';
				document.getElementById('Copy7').style.display='table-row';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';
				

				
				}
					
				else if (document.getElementById('A5').value == "Clave") {
				document.getElementById('Clave').style.display='block';
				document.getElementById('General2').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('Agentshow').style.display='none';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy10').style.display='table-row';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';
				
				
				}
					
				else if (document.getElementById('A5').value == "COA") {
				document.getElementById('COA').style.display='Block';
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('Producto1').style.display='table-row';
				document.getElementById('Clave').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy8').style.display='table-row';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';
				
				
				}
					
				else if (document.getElementById('A5').value == "HW") {
				document.getElementById('HWSpain').style.display='Block';
				document.getElementById('COA').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('Agentshow').style.display='none';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy9').style.display='table-row';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';
				
				
				}
					
				else if (document.getElementById('A5').value == "Enlaces") {
				document.getElementById('SRX0').style.display='table-row';					
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Enlaces').style.display='Block';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('Copy11').style.display='table-row';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';
				
				
				}		
			
				else if (document.getElementById('A5').value == "MIR1") {
				document.getElementById('MIR1').style.display='block';					
				document.getElementById('SRX0').style.display='table-row';					
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('Copy12').style.display='table-row';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';
				
				
				}
			
			
				else if (document.getElementById('A5').value == "MIR2") {
				document.getElementById('MIR2').style.display='block';					
				document.getElementById('SRX0').style.display='table-row';					
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('Copy13').style.display='table-row';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';

			
				}
				
				else if (document.getElementById('A5').value == "MIR3") {
				document.getElementById('MIR3').style.display='block';					
				document.getElementById('SRX0').style.display='table-row';					
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('Copy14').style.display='table-row';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';
				
				}
			
				else if (document.getElementById('A5').value == "OLS") {
				document.getElementById('OLS').style.display='block';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('SRX0').style.display='table-row';					
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('Copy15').style.display='table-row';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy16').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('HQNA').style.display='none';


				}
			
				else if (document.getElementById('A5').value == "HQNA") {
				document.getElementById('HQNA').style.display='block';				
				document.getElementById('SRX0').style.display='table-row';					
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Strike3').style.display='none';
				document.getElementById('Copy16').style.display='table-row';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
		


				}
					
				else {
				document.getElementById('Strike3').style.display='none';
				document.getElementById('Hora1').style.display='none';
				document.getElementById('Strike').style.display='none';
				document.getElementById('Resolved').style.display='none';
				document.getElementById('General').style.display='none';
				document.getElementById('General2').style.display='none';
				document.getElementById('Producto1').style.display='none';
				document.getElementById('Clave').style.display='none';
				document.getElementById('COA').style.display='none';
				document.getElementById('Agentshow').style.display='none';
				document.getElementById('HWSpain').style.display='none';
				document.getElementById('SRX0').style.display='none';
				document.getElementById('name0').style.display='none';
				document.getElementById('reset0').style.display='none';
				document.getElementById('Gender0').style.display='none';
				document.getElementById('Action0').style.display='none';
				document.getElementById('Blocker0').style.display='none';
				document.getElementById('Solucion0').style.display='none';
				document.getElementById('Copy1').style.display='none';
				document.getElementById('Copy2').style.display='none';
				document.getElementById('Copy3').style.display='none';
				document.getElementById('Copy4').style.display='none';
				document.getElementById('Copy5').style.display='none';
				document.getElementById('Copy6').style.display='none';
				document.getElementById('Copy7').style.display='none';
				document.getElementById('Copy8').style.display='none';
				document.getElementById('Copy9').style.display='none';
				document.getElementById('Copy10').style.display='none';
				document.getElementById('Copy11').style.display='none';
				document.getElementById('Copy12').style.display='none';
				document.getElementById('Copy13').style.display='none';
				document.getElementById('Copy14').style.display='none';
				document.getElementById('Copy15').style.display='none';
				document.getElementById('Unresolved').style.display='none';
				document.getElementById('Ghost').style.display='none';
				document.getElementById('Rejoin').style.display='none';
				document.getElementById('Rejoin2').style.display='none';
				document.getElementById('Enlaces').style.display='none';
				document.getElementById('MIR1').style.display='none';
				document.getElementById('MIR2').style.display='none';
				document.getElementById('MIR3').style.display='none';
				document.getElementById('OLS').style.display='none';
				document.getElementById('HQNA').style.display='none';
							
					}
					}
