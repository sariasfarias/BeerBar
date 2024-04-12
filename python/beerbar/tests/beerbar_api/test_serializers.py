import pytest
from beerbar_api.serializers import BeerSerializer, OrderSerializer, OrderItemSerializer
from tests.factories.models import BeerFactory, OrderFactory, OrderItemFactory, RoundFactory


def test_beer_serializer():
    beer = BeerFactory()
    serializer = BeerSerializer(instance=beer)
    assert serializer.data['name'] == beer.name
    assert serializer.data['price'] == format(beer.price, ".2f")
    assert serializer.data['quantity'] == beer.quantity


def test_order_item_serializer():
    order_item = OrderItemFactory()
    serializer = OrderItemSerializer(instance=order_item)
    assert serializer.data['name'] == order_item.name
    assert serializer.data['quantity'] == order_item.quantity


def test_order_serializer():
    order = OrderFactory()

    serializer = OrderSerializer(instance=order)
    assert serializer.data['created'] == order.created
    assert serializer.data['paid'] == order.paid
    assert serializer.data['subtotal'] == format(order.subtotal, ".2f")
    assert serializer.data['taxes'] == format(order.taxes, ".2f")
    assert serializer.data['discounts'] == format(order.discounts, ".2f")
