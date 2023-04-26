export class ClientDTO {
  id: string = "";
  name: string = "";
  country: string = "";
}

export class CardDTO {
  id: string = "";
  number: string = "";
  validUntil: string = "";
  verificationCode: number = 0;
  clientId: string = "";
  constructor(cardData: CardDTO) {
    // validate
  }
}

export class ClientEntityHerencia extends ClientDTO {
  cards: CardDTO[] = [];
  markCardAsPreferred(cardId: string) {}
}

export class ClientEntityComposition {
  client: ClientDTO;
  cards: CardEntityComposition[] = [];

  constructor(client: ClientDTO) {
    this.client = client;
  }

  markCardAsPreferred() {}
  checkCardsLimit() {
    this.cards.forEach((card) => card.checkLimit());
  }
}

export class CardEntityComposition {
  card: CardDTO;
  client: ClientEntityComposition;
  constructor(card: CardDTO) {
    this.card = card;
  }
  checkLimit() {}
}
