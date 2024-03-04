from rest_framework.views import APIView
from rest_framework.response import Response
from .models import WantedCriminal
from .serializers import WantedSerializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404

class WantedCriminalView(APIView):
      def get(self, request):
        criminals = WantedCriminal.objects.all()
        serializer = WantedSerializer(criminals, many=True)
        return Response(serializer.data)

class WantedDetail(APIView):
    def get (self, request, pk):
        criminal = get_object_or_404(WantedCriminal, pk=pk)
        serializer = WantedSerializer(instance=criminal)
        return Response(serializer.data)
    def patch(self,request,pk):
        criminal = get_object_or_404(WantedCriminal, pk=pk)
        serializer = WantedSerializer(criminal , data=request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg": "success" , "updated":serializer.data})
        return Response(serializer.errors, status=400)
    def delete(self,request,pk):
        criminal = get_object_or_404(WantedCriminal, pk=pk)
        criminal.delete()

    
        


@api_view(['POST'])
def addWanted(request):
    serializer = WantedSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": "Wanted criminal added successfully"} )
    else:
        return Response(serializer.errors, status=400)
    

    
