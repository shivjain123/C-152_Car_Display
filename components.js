//Base
AFRAME.registerComponent("base", {
    schema: {
        radius: { type: "number", default: 15 },
        height: { type: "number", default: 3.6 }
    },
    init: function () {
        this.el.setAttribute("geometry", {
            primitive: "cylinder",
            radius: this.data.radius,
            height: this.data.height
        });
        this.el.setAttribute("material", { color: "#B87333" });
    },
});
//Car
AFRAME.registerComponent("car", {
    schema: {
        modelRef: { type: "string", default: "../assets/scene.gltf" },
        clickCounter: {type: "number", default: 0}
    },
    init: function () {
        this.el.setAttribute("gltf-model", this.data.modelRef);
        const position = { x: 5.3, y: 2, z: 4.7 };
        const rotation = { x: 0, y: -100, z: 0 };
        const scale = {x: 5.9, y: 5.9, z: 5.9};
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
        this.el.setAttribute("scale", scale)
    },
    update: function () {
        window.addEventListener("click", e => {
            this.data.clickCounter += 1;
            if (this.data.clickCounter === 1) {
                const rotation = { x: 0, y: 20, z: 0 };
                this.el.setAttribute("rotation", rotation);
            }
            else if (this.data.clickCounter === 2) {
                const rotation = { x: 0, y: 100, z: 0 };
                this.el.setAttribute("rotation", rotation);
            }
            else if (this.data.clickCounter === 3) {
                const rotation = { x: 0, y: -200, z: 0 };
                this.el.setAttribute("rotation", rotation);
            }
            else if (this.data.clickCounter === 4) {
                const rotation = { x: 0, y: -100, z: 0 };
                this.el.setAttribute("rotation", rotation);
                const cameraEl = document.querySelector("#camera");
                const position = { x: 0, y: 195, z: 450 };
                cameraEl.setAttribute("position", position);
            }
            else {
                const rotation = { x: 0, y: -100, z: 0 };
                this.el.setAttribute("rotation", rotation);
                const cameraEl = document.querySelector("#camera");
                const position = { x: 0, y: 50, z: 250 };
                cameraEl.setAttribute("position", position);
                this.data.clickCounter = 0;
            }
        });
    }
});
