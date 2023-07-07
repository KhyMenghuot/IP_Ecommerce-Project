<template>
    <div class="container">
        <a-row type="flex">
            <a-col   :span="12" :xs="{ order: 1 }" :sm="{ order: 2 }" :md="{ order: 3 }" :lg="{ order: 4 }">
            <h1>Hello</h1>
            <h2>Hello</h2>
            </a-col>
            <a-col  :span="12" :xs="{ order: 2 }" :sm="{ order: 1 }" :md="{ order: 4 }" :lg="{ order: 3 }">
            2 col-order-responsive
            </a-col>
           
        </a-row>
    </div>
    
</template>
