from factory import Factory, Faker
from beerbar_api.domain.models import Beer, OrderItem, Order, Round


class BeerFactory(Factory):
    class Meta:
        model = Beer

    name = Faker('word')
    price = Faker('random_number', digits=2)
    quantity = Faker('random_number', digits=2)


class OrderItemFactory(Factory):
    class Meta:
        model = OrderItem

    name = Faker('word')
    quantity = Faker('random_number', digits=2)


class OrderFactory(Factory):
    class Meta:
        model = Order


class RoundFactory(Factory):
    class Meta:
        model = Round

