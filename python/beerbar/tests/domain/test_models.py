from datetime import datetime
from tests.factories.models import BeerFactory, OrderItemFactory, OrderFactory, RoundFactory


def test_beer_model():
    beer = BeerFactory(name="Corona", price=5, quantity=10)
    assert beer.name == "Corona"
    assert beer.price == 5.0
    assert beer.quantity == 10


def test_order_item_model():
    order_item = OrderItemFactory(name="Corona", quantity=2)
    assert order_item.name == "Corona"
    assert order_item.quantity == 2


def test_order_model():
    order = OrderFactory()
    assert not order.paid
    assert order.subtotal == 0
    assert order.taxes == 0
    assert order.discounts == 0
    assert order.items == []
    assert order.rounds == []


def test_round_model():
    test_round = RoundFactory()
    assert test_round.items == []
