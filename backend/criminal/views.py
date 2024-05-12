from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Criminal
from .serializers import Criminalserializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from criminal.serializers import Requestserializer
from criminal.serializers import Responceserializer
from criminal.models import Requests
from criminal.models import Responces


class CriminalView(APIView):
      def get(self, request):
        criminals = Criminal.objects.all()
        serializer = Criminalserializer(criminals, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def addCriminal(request):
    serializer = Criminalserializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": "Criminal record added"},status=201 )
    else:
        print(serializer.errors)
        return Response({"success": "Bad request please recheck your input"}, status=400)




    
   
    
class Criminal_detail(APIView):
    def get (self, request, pk):
        criminal = get_object_or_404(Criminal, pk=pk)
        serializer = Criminalserializer(instance=criminal)
        return Response(serializer.data)
    def patch(self,request,pk):
        criminal = get_object_or_404(Criminal, pk=pk)
        serializer = Criminalserializer(criminal , data=request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": "criminal updated successfully"})
        return Response({"success":"Seems like there is an error in the input you entered, please check your input and try again"}, status=400)
    def delete(self,request,pk):
        try:
            criminal = Criminal.objects.get(pk=pk)
        except Criminal.DoesNotExist:
             return Response({'success': 'Criminal not found'}, status=404)
    
        criminal.delete()
        return Response({'success': 'Criminal deleted successfully'}, status=200)


    

    
