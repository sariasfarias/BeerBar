from factory import Factory, Faker
from beerbar_api.models import Beer, OrderItem, Order, Round, Stock


class BeerFactory(Factory):
    class Meta:
        model = Beer

    name = Faker('word')
    price = Faker('random_number', digits=2)
    quantity = Faker('random_number', digits=2)


class StockFactory(Factory):
    class Meta:
        model = Stock


class OrderItemFactory(Factory):
    class Meta:
        model = OrderItem

    name = Faker('word')
    quantity = Faker('random_number', digits=2)


class OrderFactory(Factory):
    class Meta:
        model = Order

    paid = False
    subtotal = Faker('random_number', digits=2)
    taxes = Faker('random_number', digits=2)
    discounts = Faker('random_number', digits=2)


class RoundFactory(Factory):
    class Meta:
        model = Round

