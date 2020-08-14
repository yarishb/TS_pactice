class Typescript{
  vesion: string
  constructor(version: string) {
    this.vesion = version
  }
  info(name: string) {
    return `[${name}]: Typescript virsion is ${this.vesion}`
  }
}

class Car{
  readonly numberOfWheels: number = 4
  constructor(readonly model: string){}
}

class Animal{
  protected voice: string = ''
  public color: string = 'black'

  private go() {
    console.log('Go')
  }
}

class Cat extends Animal{
  public setVoice(voice: string): void{
    this.voice = voice
  }
}

const cat = new Cat()

cat.setVoice("test")
console.log(cat.color);


abstract class Component{
  abstract render(): void
  abstract info(): string
}

class AddComponent extends Component{
  render(): void{
    console.log('Component on render');
  }
  info(): string{
    return 'This is info'
  }
}