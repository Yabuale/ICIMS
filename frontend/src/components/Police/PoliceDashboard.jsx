const PoliceDashboard = () =>{
   return(
   

      <div>
	<div class="container px-6 mx-auto grid">
    <h2 class="my-6 mb-1 text-2xl text-center font-semibold text-sky-900">
			Welcome, Officier
		</h2>
		<h2 class="my-6 text-2xl font-semibold text-gray-700">
			Dashboard
		</h2>

		<div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
			<div class="flex items-center p-4 bg-sky-50 rounded-lg shadow-2xl">
				<div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
						</path>
					</svg>
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-gray-600">
						Total Posted
					</p>
					<p class="text-lg font-semibold text-gray-700">
						19238
					</p>
				</div>
			</div>
			<div class="flex items-center p-4 bg-sky-50 rounded-lg shadow-2xl">
				<div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.29 9.17005L7.70002 3.07005C4.95002 1.62005 1.96002 4.55005 3.35002 7.33005L4.97002 10.57C5.42002 11.47 5.42002 12.53 4.97002 13.43L3.35002 16.67C1.96002 19.45 4.95002 22.37 7.70002 20.93L19.29 14.83C21.57 13.63 21.57 10.37 19.29 9.17005Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
					</svg>
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-gray-600">
						Active Requests
					</p>
					<p class="text-lg font-semibold text-gray-700">
						120
					</p>
				</div>
			</div>
			<div class="flex items-center p-4 bg-sky-50 rounded-lg shadow-2xl">
				<div class="p-3 mr-4 text-red-500 bg-red-100 rounded-full">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
               <svg fill="#000000" viewBox="0 0 16 16" id="request-sent-16px" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_50" data-name="Path 50" d="M-11.5,0h-11A2.5,2.5,0,0,0-25,2.5v8A2.5,2.5,0,0,0-22.5,13h.5v2.5a.5.5,0,0,0,.309.462A.489.489,0,0,0-21.5,16a.5.5,0,0,0,.354-.146L-18.293,13H-11.5A2.5,2.5,0,0,0-9,10.5v-8A2.5,2.5,0,0,0-11.5,0ZM-10,10.5A1.5,1.5,0,0,1-11.5,12h-7a.5.5,0,0,0-.354.146L-21,14.293V12.5a.5.5,0,0,0-.5-.5h-1A1.5,1.5,0,0,1-24,10.5v-8A1.5,1.5,0,0,1-22.5,1h11A1.5,1.5,0,0,1-10,2.5Zm-2.038-3.809a.518.518,0,0,1-.109.163l-2,2A.5.5,0,0,1-14.5,9a.5.5,0,0,1-.354-.146.5.5,0,0,1,0-.708L-13.707,7H-18.5A1.5,1.5,0,0,0-20,8.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5A2.5,2.5,0,0,1-18.5,6h4.793l-1.147-1.146a.5.5,0,0,1,0-.708.5.5,0,0,1,.708,0l2,2a.518.518,0,0,1,.109.163A.505.505,0,0,1-12.038,6.691Z" transform="translate(25)"></path> </g></svg>
					</svg>
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-gray-600">
						Unread Responses
					</p>
					<p class="text-lg font-semibold text-gray-700">
						6389
					</p>
				</div>
			</div>
			
		</div>
	</div>
</div>


   );
};

export default PoliceDashboard;