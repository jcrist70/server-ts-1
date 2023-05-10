
export function getConfigItem<
  TSection extends keyof typeof config,
  TItem extends keyof typeof config[TSection]
>(section: TSection, item: TItem) {
  const config = {
    user: {
      firstName: 'John',
      lastName: 'Doe',
      birthDate: new Date(1990, 6, 10),
    },
    address: {
      street: 'Main St',
      houseNumber: 123,
      city: 'New York',
    },
  };

  return config[section][item];
}