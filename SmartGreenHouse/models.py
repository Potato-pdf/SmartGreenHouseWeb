from django.db import models

# Create your models here.
class Invernadero (models.Model):
    id_invernadero = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    imagen = models.ImageField(upload_to='./assets/', default='./assets/Untitled.png')

    def __str__(self):
        return self.nombre
        