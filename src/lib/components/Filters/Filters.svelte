<script lang="ts">
    import SearchInput from "$lib/elements/SearchInput/SearchInput.svelte";
    import Select from "$lib/elements/Select/Select.svelte";

    let value: string = "";
    function handleSelectChange(event: any) {
        value = event.detail;
        console.log(value);
    }
</script>

<div class="filters">
    <SearchInput />
    <Select
        label="Filter by Region"
        options={["Africa", "America", "Asia", "Europe", "Oceania"]}
        bind:value
        on:change={handleSelectChange}
    />
</div>

<style lang="scss">
    .filters {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 50px 0;
        flex-wrap: wrap;
    }
</style>
