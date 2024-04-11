from datetime import datetime
from typing import List


class Beer:
    def __init__(self, name: str, price: float, quantity: int):
        self.name = name
        self.price = price
        self.quantity = quantity


class OrderItem:
    def __init__(self, name: str, quantity: int):
        self.name = name
        self.quantity = quantity


class Order:
    def __init__(self):
        self.created = datetime.now()
        self.paid = False
        self.subtotal = 0
        self.taxes = 0
        self.discounts = 0
        self.items: List[OrderItem] = []
        self.rounds: List[Round] = []


class Round:
    def __init__(self):
        self.created = datetime.now()
        self.items: List[OrderItem] = []
