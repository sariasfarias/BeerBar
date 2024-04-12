from datetime import datetime
from tests.factories.models import BeerFactory, OrderItemFactory, OrderFactory, RoundFactory
from beerbar_api.models import Beer, OrderItem, Order, Round


def test_beer_model():
    beer = BeerFactory(name="Corona", price=5, quantity=10)
    assert isinstance(beer, Beer)


def test_order_item_model():
    order_item = OrderItemFactory(name="Corona", quantity=2)
    assert isinstance(order_item, OrderItem)


def test_order_model():
    order = OrderFactory()
    assert isinstance(order, Order)


def test_round_model():
    test_round = RoundFactory()
    assert isinstance(test_round, Round)
