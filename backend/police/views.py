from rest_framework.views import APIView
from rest_framework.response import Response
from wanted.models import WantedCriminal
from wanted.serializers import WantedSerializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from criminal.serializers import Requestserializer
from criminal.serializers import Responceserializer
from criminal.models import Requests
from criminal.models import Responces


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
    

    
class Requests(APIView):
    """ def get (self, request, pk):
        requests = get_object_or_404(Requests, pk=pk)
        serializer = Requestserializer(instance=requests)
        return Response(serializer.data)"""
    
    def post(self,request):
        serializer = Requestserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": "Your request has been sent"} , status=200)
        else:
            return Response({"success":serializer.errors}, status=400)
        

class Respview(APIView):
      def get(self, request,pk):
        req = Responces.objects.all()
        serializer = Responceserializer(req, many=True)
        return Response(serializer.data, status=200)
      def delete(self,request,pk):
          req =get_object_or_404(Responces,pk=pk)
          req.delete()
          return Response({"fsdfds":"sdf"},status=200)