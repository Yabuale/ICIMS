from rest_framework.views import APIView
from rest_framework.response import Response
from .models import WantedCriminal
from .serializers import WantedSerializer
from rest_framework.decorators import api_view

class WantedCriminalView(APIView):
      def get(self, request):
        criminals = WantedCriminal.objects.all()
        serializer = WantedSerializer(criminals, many=True)
        return Response(serializer.data)


@api_view(['POST'])
def addWanted(request):
    serializer = WantedSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": "Wanted criminal added successfully"} )
    else:
        return Response(serializer.errors, status=400)
    

    
