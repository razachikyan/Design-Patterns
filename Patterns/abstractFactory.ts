interface WeaponFactory {
  createAssaultRifle(): AssaultRifle;

  createPistol(): Pistol;
}

class RussianWeaponFactory implements WeaponFactory {
  public createAssaultRifle(): AssaultRifle {
    return new AK47();
  }

  public createPistol(): Pistol {
    return new MakarovPistol();
  }
}

class AmericanWeaponFactory implements WeaponFactory {
  public createAssaultRifle(): AssaultRifle {
    return new M16();
  }

  public createPistol(): Pistol {
    return new Glock();
  }
}

interface AssaultRifle {
  shoot(): string;
}

class AK47 implements AssaultRifle {
  public shoot(): string {
    return "Multiple shoots from AK";
  }
}

class M16 implements AssaultRifle {
  public shoot(): string {
    return "Multiple shoots from M";
  }
}

interface Pistol {
  shoot(): string;
}

class MakarovPistol implements Pistol {
  public shoot(): string {
    return "One shot from PM";
  }
}

class Glock implements Pistol {
  public shoot(): string {
    return "One shot from Glock";
  }
}

(function (factory: WeaponFactory) {
  const ak47 = factory.createAssaultRifle();
  const makarovPistol = factory.createPistol();

  console.log(makarovPistol.shoot());
  console.log(ak47.shoot());
})(new RussianWeaponFactory());

(function (factory: WeaponFactory) {
  const m16 = factory.createAssaultRifle();
  const glock = factory.createPistol();

  console.log(glock.shoot());
  console.log(m16.shoot());
})(new AmericanWeaponFactory());
