from multiprocessing.dummy.connection import Client
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

from cliente.models import Clientes
from cliente.serializers import ClienteSerializer

@csrf_exempt
def clienteApi(request,id=0):
    if request.method=='GET':
        clientes = Clientes.objects.all()
        clientes_serializer = ClienteSerializer(clientes, many=True)
        return JsonResponse(clientes_serializer.data,safe=False)
    
    elif request.method=='POST':
        cliente_data=JSONParser().parse(request)
        clientes_serializer = ClienteSerializer(data=cliente_data)
        if clientes_serializer.is_valid():
            return JsonResponse("Adicionado com Sucesso!", safe=False)
        return JsonResponse("Falha ao adicionar!", safe=False)
    
    elif request.method=='DELETE':
         clientes = Clientes.objects.get(id_cliente=id)
         clientes.delete()
         return JsonResponse("Deletado com Sucesso!", safe=False)
    
    elif request.method=='PUT':
         cliente_data=JSONParser().parse(request)
         clientes = Clientes.objects.get(id_cliente=cliente_data['id_cliente'])
         clientes_serializer = ClienteSerializer(clientes, data=cliente_data)
         if clientes_serializer.is_valid():
               clientes_serializer.save()
               return JsonResponse("Atualizado com sucesso!", safe=False)
         return JsonResponse("Falha ao atualizar!")

