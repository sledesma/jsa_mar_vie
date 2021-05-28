using System;

namespace Ejemplo {

  public class Direccion {
    private string calle {get; set;}
    public int altura {get; set;}
  }

  public class Persona {

    private Direccion direccion;

    public Persona(Direccion dir) {
      this.direccion = dir;
    }

  }

  public class Cliente {

    private Direccion direccion;

    public Cliente(Direccion dir) {
      this.direccion = dir;
    }

  }

}