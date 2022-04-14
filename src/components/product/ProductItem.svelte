<script lang="ts">
    export let item;
</script>

<style>
    .item-container {
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 0.75rem;
    }
    .item-image {
        width: 100%;
        height: 90%;
    }
    .item-image > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .item-name {
        width: 100%;
        height: 10%;
        margin: 0.25rem;
    }
    .item-name > span {
        font-size: 1.2em;
        font-weight: bold;
    }
</style>

<div class="item-container">
    <div class="item-image">
        <img src="https://shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png" alt="{item.name}">
    </div>
    <div class="item-name">
        <span>{item.name}</span>
    </div>
</div>