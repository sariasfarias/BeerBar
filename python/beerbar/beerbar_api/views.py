from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.decorators import api_view

from .models import Order, Stock, Beer, Round, OrderItem
from .serializers import BeerSerializer, OrderSerializer, OrderItemSerializer


@api_view(['GET'])
def get_stock(request):

    stock = Stock.objects.all().last()

    if not stock:
        return Response(status=status.HTTP_404_NOT_FOUND)

    beers = Beer.objects.all()
    serializer_beers = BeerSerializer(beers, many=True).data
    response = {
        'last_updated': stock.last_updated,
        'beers': serializer_beers,
    }
    return Response(response)


@api_view(['GET'])
def get_order(request, order_id):
    try:
        order = Order.objects.get(id=order_id)
    except Order.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    rounds = Round.objects.filter(order=order_id)

    round_response = []
    for order_round in rounds:
        order_items = OrderItem.objects.filter(round_id=order_round.id)
        serializer_order_items = OrderItemSerializer(order_items, many=True).data
        round_response.append({
            'created': order_round.created,
            'items': serializer_order_items
        })

    serializer_order = OrderSerializer(order).data
    response = serializer_order
    response['rounds'] = round_response
    return Response(response)
