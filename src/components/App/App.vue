<template>
    <div
        class="row justify-content-center align-items-center position-fixed bottom-0 top-0 start-0 end-0 app-base-row">
        <div class="col text-center">
            <div class="container">
                <h1
                    v-if="!nameIsSupplied"
                    class="display-3">
                    Hello, World!
                </h1>
                <div v-else>
                    <h1 class="display-3">Hello, {{name}}!</h1>
                    <p class="lead mt-3">Have a nice day!</p>
                </div>
                <div class="row mt-5 justify-content-center">
                    <div class="col-lg-8">
                        <input
                            v-model="name"
                            type="text"
                            class="form-control shadow-none rounded-1"
                            placeholder="Enter your name here..."
                            autofocus>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./script.js"></script>
<style src="./style.css" scoped></style>
