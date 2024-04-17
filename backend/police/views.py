from rest_framework.views import APIView
from rest_framework.response import Response
from wanted.models import WantedCriminal
from wanted.serializers import WantedSerializer
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
            return Response({"success": "Wanted criminal updated successfully"})
        return Response({"success":"Seems like there is an error in the input you entered, please check your input and try again"}, status=400)
    def delete(self,request,pk):
        try:
            criminal = WantedCriminal.objects.get(pk=pk)
        except WantedCriminal.DoesNotExist:
             return Response({'success': 'Criminal not found'}, status=404)
    
        criminal.delete()
        return Response({'success': 'Criminal deleted successfully'}, status=200)

    
        


@api_view(['POST'])
def addWanted(request):
    serializer = WantedSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": "Wanted criminal posted successfully"} , status=201)
    else:
        return Response({"msg":"Seems like there is an error in the input you entered, please check your input and try again"}, status=400)
    

    
