from rest_framework import serializers
from .models import Beer, Stock, Order, OrderItem, Round


class BeerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer
        fields = ['name', 'price', 'quantity']


class OrderItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderItem
        fields = ['name', 'quantity']


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['created', 'paid', 'subtotal', 'taxes', 'discounts']
