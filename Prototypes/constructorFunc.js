function Color(r, g, b) {
   this.r = r;
   this.g = g;
   this.b = b;
}

// new Color(255, 40, 100);

Color.prototype.rgb = function() {
   const { r, g, b } = this;
   return `rgb({${r}, ${g}, ${b}})`;
}

const color1 = new Color(40, 50, 60);
console.log(color1.rgb());

Color.prototype.hex = function() {
   const {r,g,b} = this;
   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const color2 = new Color(0, 0, 0);
console.log(color2.hex());

Color.prototype.rgba = function(a = 1.0) {
   const { r, g, b } = this;
   return `rgba(${r}, ${g}, ${b}, ${a})`;
};

console.log(color2.rgba());