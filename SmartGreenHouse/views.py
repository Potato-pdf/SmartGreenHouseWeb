from django.shortcuts import render
from rest_framework import viewsets
from .models import Invernadero 
from .serializer import SmarGreenHouse_serializer

# Create your views here
class SmartGreenHouse_views(viewsets.ModelViewSet):
    serializer_class = SmarGreenHouse_serializer
    queryset = Invernadero.objects.all()  # <- Aquí definimos el queryset    