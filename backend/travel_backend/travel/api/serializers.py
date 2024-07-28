from rest_framework import serializers
from travel.models import Hotel

# class HotelSerializer(ModelSerializer):
#     class Meta:
#         model=Hotel
#         fields='__all__'

class HotelSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Hotel
        fields = '__all__'

    def get_image(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.image.url)
        return obj.image.url