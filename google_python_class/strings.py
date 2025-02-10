address_book = [{'name':'N.X.', 'addr':'15 Jones St', 'bonus': 70},
      {'name':'J.P.', 'addr':'1005 5th St', 'bonus': 400},
      {'name':'A.A.', 'addr':'200001 Bdwy', 'bonus': 5},]

for person in address_book:
    print(f'{person["name"]:8} || {person["addr"]:20} || {person["bonus"]:>5}')