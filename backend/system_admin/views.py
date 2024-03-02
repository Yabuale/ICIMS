from rest_framework.views import APIView
from rest_framework.response import Response
from accounts.models import Branch
from accounts.serializers import branchSerializer
from rest_framework.decorators import api_view
from accounts.email import sendm

class branchView(APIView):
      def get(self, request):
        criminals = Branch.objects.all()
        serializer = branchSerializer(criminals, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def addBranch(request):
    print(request.data)
    print(request.data)
    print(request.data)
    print(request.data)
    print(request.data)
    serializer = branchSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": "Branch record added"} )
    else:
        return Response(serializer.errors, status=400)




   
    



    

    
