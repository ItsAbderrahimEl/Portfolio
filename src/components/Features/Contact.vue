<script setup lang="ts">
import Title from "@/components/Shared/Title.vue";
import Container from "@/components/Shared/Container.vue";
import Email from "@/components/Shared/Icons/Email.vue";
import Phone from "@/components/Shared/Icons/Phone.vue";
import Link from "@/components/Shared/Link.vue";
</script>

<template>
  <Container>
    <Title id="Contact" normal="Get In" colored="Touch" />
    <div class="space-y-5 md:mb-10 md:flex md:flex-col md:items-center">
      <p class="text-center md:max-w-2/3 md:text-lg">
        Whether you're hiring, building something interesting, or just want to
        talk security and code — Reach out.
      </p>
      <div class="flex flex-col items-center justify-center gap-5 md:flex-row">
        <Link
          type="primary"
          _target="_blank"
          href="mailto:abderahimouriachi@gmail.com"
          title="Email"
          class="text-black"
        >
          <template #icon>
            <Email class="size-5" />
          </template>

          Say Hello!
        </Link>

        <Link
          type="secondary"
          _target="_blank"
          href="tel:+212623960018"
          title="Phone Number"
          class="text-white"
        >
          <template #icon>
            <Phone class="size-5" />
          </template>

          Give me a call
        </Link>
      </div>
    </div>
  </Container>
</template>
