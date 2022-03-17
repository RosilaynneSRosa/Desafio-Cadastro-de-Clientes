from django.db import models
from distutils.command.upload import upload
from uuid import uuid4

class Clientes(models.Model):
    id_cliente = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    ClienteNome = models.CharField(max_length=100)
    Email = models.EmailField(max_length=100)
    Telefone = models.CharField(max_length=14)
    EnderecoCompleto = models.CharField(max_length=200)
    Profissao = models.CharField(max_length=50)
    UploadDeCurriculo = models.FileField(upload_to='documents/%Y/%m/%d')
    
