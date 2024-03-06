from rest_framework import serializers
from .models import Branch
from .models import CustomUser

class branchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'

class branchNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = ['branch_name']

class accountSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields ='__all__'