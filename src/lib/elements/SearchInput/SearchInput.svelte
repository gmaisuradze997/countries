<script lang="ts">
    import Search from "$lib/icons/Search.svg";
</script>

<div class="input-wrapper">
    <img src={Search} alt="search" />
    <input type="text" placeholder="Search for a country…" />
</div>

<style lang="scss">
    .input-wrapper {
        border-radius: 5px;
        background: #fff;
        width: 480px;
        box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
        padding: 19px 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        position: relative;
        gap: 24px;
        input {
            border: none;
            outline: none;
            width: 100%;
            font-size: 14px;
            line-height: 20px;
            font-style: normal;
            font-weight: 400;
            color: #848484;
        }
        input::placeholder {
            color: #848484;
            font-family: Nunito Sans;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
        }
        img {
            width: 18px;
            height: 18px;
        }
    }
</style>
