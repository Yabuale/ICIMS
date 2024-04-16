from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Criminal
from .serializers import Criminalserializer
from rest_framework.decorators import api_view


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



def send(request):
    
    print(request.user.email)
    print(request.user.email)
    print(request.user.email)
    print(request.user.email)
    print(request.user.email)
    print(request.user.email)
    print(request.user.email)
    print(request.user.email)
    print(request.user.email)
    print(request.user.email)
    
   
    



    

    
