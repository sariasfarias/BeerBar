import pytest
from django.urls import reverse
from rest_framework.test import APIClient

from tests.factories.models import StockFactory, BeerFactory, OrderFactory, RoundFactory, OrderItemFactory

@pytest.mark.django_db
class TestStockView:

    def test_get_stock_view_return_not_found(self):
        client = APIClient()
        response = client.get(reverse('get_stock'))
        assert response.status_code == 404

    def test_get_stock_view_return_success(self):
        stock = StockFactory(last_updated='2024-09-10 12:00:30')
        stock.save()
        beer_1 = BeerFactory()
        beer_2 = BeerFactory()
        beer_1.save()
        beer_2.save()

        client = APIClient()
        response = client.get(reverse('get_stock'))

        assert response.status_code == 200

        data = response.json()
        assert data['last_updated'].replace("T", " ").replace("Z", "") == stock.last_updated
        assert len(data['beers']) == 2


@pytest.mark.django_db
class TestOrderView:

    def test_get_order_view_return_not_found(self):
        client = APIClient()
        response = client.get(reverse('get_order', kwargs={'order_id': 4}))
        assert response.status_code == 404

    def test_get_order_view_return_success(self):
        order = OrderFactory()
        order.save()
        round_1 = RoundFactory(order=order)
        round_2 = RoundFactory(order=order)
        round_1.save()
        round_2.save()
        order_item_1 = OrderItemFactory(round=round_1)
        order_item_2 = OrderItemFactory(round=round_1)
        order_item_3 = OrderItemFactory(round=round_2)
        order_item_1.save()
        order_item_2.save()
        order_item_3.save()

        client = APIClient()
        response = client.get(reverse('get_order', kwargs={'order_id': order.id}))

        assert response.status_code == 200

        data = response.json()
        assert len(data['rounds']) == 2
        assert 'created' in data['rounds'][0]
        assert 'items' in data['rounds'][0]
        assert len(data['rounds'][0]['items']) == 2
        assert 'created' in data['rounds'][1]
        assert 'items' in data['rounds'][1]
        assert len(data['rounds'][1]['items']) == 1
