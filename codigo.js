class Celulares {
  constructor(color, peso, resPantalla, resCamara, ram) {
    this.color = color;
    this.peso = peso;
    this.resolucionDePantalla = resPantalla;
    this.resolucionDeCamara = resCamara;
    this.memoriaRam = ram;
    this.encendido = false;
  }

  presionarBotonEncendido() {
    if (this.encendido == false) {
      alert(`Celular prendido`);
      this.encendido = true;
    } else {
      this.encendido = false;
      alert(`Celular apagado`);
    }
  }

  reiniciar() {
    if (this.encendido == true) {
      alert(`Reiniciando celular`);
    } else {
      alert(`El celular está apagado`);
    }
  }

  tomarFoto() {
    if (this.encendido == true) {
      alert(`Foto tomada en una resolución de: ${this.resolucionDeCamara}`);
    } else {
      alert(`El celular está apagado`);
    }
  }

  grabarVideo() {
    if (this.encendido == true) {
      alert(`Grabando video en: ${this.resolucionDeCamara}`);
    } else {
      alert(`El celular está apagado`);
    }
  }

  mobileInfo() {
    return `
        color: <b>${this.color}</b> <br>
        peso: <b>${this.peso}</b> <br>
        resolución de pantalla: <b>${this.resolucionDePantalla}</b> <br>
        Memoria RAM: <b>${this.memoriaRam}</b> <br>
        resolución de cámara: <b>${this.resolucionDeCamara}</b> <br>
      `;
  }
}

class CelularesAltaGama extends Celulares {
  constructor(color, peso, resPantalla, resCamara, ram, camExtra) {
    super(color, peso, resPantalla, resCamara, ram);
    this.resolucionCamaraExtra = camExtra;
    this.encendido = false;
  }

  grabarVideoSlowCam() {
    if (this.encendido == true) {
      alert(`Grabando video en cámara lenta en: ${this.resolucionDeCamara}`);
    } else {
      alert(`El celular está apagado`);
    }
  }

  recFacial() {
    if (this.encendido == true) {
      alert(`Reconocimiento facial activado`);
    } else {
      alert(`El celular está apagado`);
    }
  }

  infoAltaGama() {
    return (
      this.mobileInfo() +
      `resolución de cámara extra: <b>${this.resolucionCamaraExtra}</b> <br>`
    );
  }
}

const celular1 = new Celulares(`Rojo`, `150g`, `5'`, `HD`, `1GB`);
const celular2 = new Celulares(`Negro`, `155g`, `5.4'`, `full HD`, `2GB`);
const celular3 = new Celulares(`Blanco`, `146g`, `5.9'`, `full HD`, `2GB`);
const celular4 = new CelularesAltaGama(
  `Rojo`,
  `130g`,
  `5.2'`,
  `4K`,
  `3GB`,
  `full HD`
);
const celular5 = new CelularesAltaGama(
  `Negro`,
  `142g`,
  `6'`,
  `4K`,
  `4GB`,
  `HD`
);

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

document.write(`
${celular1.mobileInfo()} <br>
${celular2.mobileInfo()} <br>
${celular3.mobileInfo()} <br>
${celular4.infoAltaGama()} <br>
${celular5.infoAltaGama()} <br>
`);

celular4.presionarBotonEncendido();
celular4.recFacial();
celular4.grabarVideoSlowCam();
