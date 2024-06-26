<script setup>
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const props = defineProps({
    navbar: {
        type: Array,
        required: true
    },
    availableLocales: {
        type: Array,
        required: true
    }
})
function handleLanguage (value) {
    navigateTo(switchLocalePath(value))
}
const mobileMenuOpen = ref(false)
</script>
<template>
     <div class="ml-4 md:hidden" x-data="{ mobileMenuOpen: false }">
        <button
            class="relative z-50 flex items-center justify-center p-3 transition duration-300 ease-in-out rounded-full shadow-sm cursor-pointer group bg-slate-100/80 shadow-sky-100/50 ring-1 ring-slate-900/5 hover:bg-slate-200/60 focus:outline-none md:hidden"
            aria-label="Toggle Navigation"
            @click="mobileMenuOpen = !mobileMenuOpen"
        >
            <span
                class="relative h-3.5 w-4 transform transition duration-500 ease-in-out"
            >
                <span
                    class="absolute block h-0.5 rotate-0 transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900"
                    :class="mobileMenuOpen ? 'top-1.5 left-1/2 w-0': 'top-0 left-0 w-full'"
                ></span>
                <span
                    class="absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900"
                    :class="mobileMenuOpen ? 'rotate-45': 'rotate-0'"
                ></span>
                <span
                    class="absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900"
                    :class="mobileMenuOpen ? '-rotate-45': 'rotate-0'"
                ></span>
                <span
                    class="absolute block h-0.5 rotate-0 transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900"
                    :class="mobileMenuOpen ? 'top-1.5 left-1/2 w-0': 'left-0 top-3 w-full'"
                ></span>
            </span>
        </button>

        <!-- Mobile menu container -->
        <div class="md:hidden">
        <!-- Background dark overlay when mobile menu is open -->
        <div
            x-show="mobileMenuOpen"
            x-transition:enter="duration-200 ease-out"
            x-transition:enter-start="opacity-0"
            x-transition:enter-end="opacity-100"
            x-transition:leave="duration-150 ease-in"
            x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0"
            class="fixed inset-0 z-20 bg-opacity-50 bg-slate-900"
            :class="mobileMenuOpen ? 'block': 'hidden'"
        ></div>

        <!-- Mobile menu popover -->
        <div
            x-show="mobileMenuOpen"
            x-transition:enter="duration-300 ease-out"
            x-transition:enter-start="opacity-0 scale-90"
            x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="duration-200 ease-in"
            x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-90"
            class="absolute inset-x-0 z-30 px-6 mt-4 overflow-hidden origin-top shadow-xl top-full rounded-2xl bg-slate-50 py-7 shadow-sky-100/40 ring-1 ring-slate-900/5"
            :class="mobileMenuOpen ? 'block': 'hidden'"
            @click="mobileMenuOpen = false"
        >
            <div>
            <!-- Mobile menu links -->
                <div class="flex flex-col space-y-4">
                    <nuxt-link
                        v-for="item in props.navbar"
                        :key="item.name"
                        :to="item.url"
                        class="block text-base font-semibold duration-200 text-slate-700 hover:text-slate-900"
                    >
                        {{ $t(item.name) }}
                    </nuxt-link>
                </div>
                <ul
                    class="flex items-center justify-center md:justify-end gap-2 mt-5 md:mt-0"
                >
                    <li
                        v-for="(localeItem, index) in availableLocales"
                        :key="index"
                    >
                        <button
                            type="button"
                            @click="() => handleLanguage(localeItem.value)"
                            class="p-1 rounded-md"
                            :class="{
                                'bg-black text-white font-bold': localeItem.value === locale,
                                'text-gray-500': localeItem.value !== locale
                            }"
                        >
                            {{ localeItem.label }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</template>