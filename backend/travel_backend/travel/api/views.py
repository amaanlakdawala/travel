from rest_framework.decorators import api_view
from rest_framework.response import Response
from travel.models import Hotel
from .serializers import HotelSerializer


# @api_view(['GET'])
# def getHotels(request):
    # hotels = Hotel.objects.all()  # Querying all Hotel objects from the database
    # serializer = HotelSerializer(hotels, many=True)  # Serializing the queryset
    # return Response(serializer.data)  # Returning the serialized data in a Response




@api_view(['GET'])
def getHotels(request):
    hotels = Hotel.objects.all()
    serializer = HotelSerializer(hotels, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getHotel(request,pk):
    hotel = Hotel.objects.get(id=pk)
    serializer = HotelSerializer(hotel,context={'request':request})
    return Response(serializer.data)
