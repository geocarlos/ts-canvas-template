window.onload = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    render();

    function render() {
        context.fillRect(0, 0, width, height);
        context.stroke();
        context.fill();

        // requestAnimationFrame(render);
    }
}