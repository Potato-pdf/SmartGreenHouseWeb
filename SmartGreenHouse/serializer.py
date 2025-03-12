
from rest_framework import serializers
from .models import Invernadero

class SmarGreenHouse_serializer (serializers.ModelSerializer):
    class Meta:
        model = Invernadero
        fields = ('__all__')