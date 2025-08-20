<script>
    const { items, title, price, description, total } = $props();
</script>

<div>
    <h1>{title}</h1>
    <h2>Precio: ${price}</h2>
    <p>{description}</p>
    <span>Tu total actual es: {total}</span>
</div>