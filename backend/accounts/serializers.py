from rest_framework import serializers
from .models import Branch

class branchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'