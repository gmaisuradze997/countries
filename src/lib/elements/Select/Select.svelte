<script lang="ts">
    import Arrow from "$lib/icons/Arrow.svg";
    import { createEventDispatcher } from "svelte";
    export let options: string[] = [];
    export let value: string = "";
    export let label: string = "";
    let isOpen: boolean = false;

    const dispatch = createEventDispatcher();
    function onSelect(
        event: MouseEvent & { currentTarget: EventTarget & HTMLDivElement },
        option: string,
    ) {
        event.stopPropagation();
        dispatch("change", option);
        isOpen = false;
    }
</script>

<div class="select-wrapper">
    <div
        class="select"
        on:click={() => (isOpen = !isOpen)}
        tabindex="0"
        role="button"
    >
        <div class="select__value">
            {value || label}
        </div>
        <div class="select__arrow">
            <img src={Arrow} alt="arrow-down" />
        </div>
        <div class="select__options" class:open={isOpen} role="listbox">
            {#each options as option}
                <div
                    class="select__option"
                    tabindex="0"
                    role="option"
                    aria-selected={option === value}
                    on:click={(event) => {
                        onSelect(event, option);
                    }}
                >
                    {option}
                </div>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    .select-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 200px;
    }
    .select {
        border-radius: 5px;
        background: #fff;
        width: 100%;
        box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
        padding: 18px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        position: relative;
        gap: 24px;
        cursor: pointer;
        .select__value {
            font-size: 14px;
            line-height: 20px;
            font-style: normal;
            font-weight: 400;
            color: #848484;
            font-family: Nunito Sans;
        }
        .select__arrow {
            width: 18px;
            height: 18px;
        }
        .select__options {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            top: 60px;
            background: #fff;
            border-radius: 5px;
            box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
            padding: 18px 24px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            max-height: 200px;
            overflow-y: auto;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            &.open {
                opacity: 1;
                visibility: visible;
            }
            .select__option {
                font-size: 14px;
                line-height: 20px;
                font-style: normal;
                font-weight: 400;
                color: #848484;
                font-family: Nunito Sans;
                cursor: pointer;
                &:hover {
                    color: #000;
                }
            }
        }
    }
</style>
