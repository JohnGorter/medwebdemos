Vue.component('event-input', {
    props:['day'],
    template:`
        <div class="newevent">
           <div class="title">Add a new event for {{day}}</div>
           <div class="eventform">
            <dl>
                <dt>event</dt>
                <dd><input type="text"></input></dd>
            </dl>
            <input type="submit" value="Voeg toe">
            </div>
        </div>
    `
})

Vue.component('event-element', {
    props:['event'],
    methods:{
        edit(){
            console.log("editing this item...")
        }
    },
    template:`
        <div class="event"><span @click="edit"><i class="fas fa-edit"></i></span> {{event.name}} </div>
    `
});

Vue.component("day-element", {
    props:['day', 'selected'],
    methods:{
        selectDay(day){
            this.$emit('select-day', { day:day.dayname});
        }
    },
    template:`<div class="day"><div :class="{selected:selected}" class="title" @click="selectDay(day)">{{day.dayname}}</div><div class="events">
        <event-element v-for="event in day.events" :event="event"></event-element>
        <div class="empty" v-if="day.events.length == 0">+</div>
        </div></div>`
});

Vue.component("calendar-element", { 
    props:['calendar'],
    data: function() { return {
        selectedDay:''
    }},
    methods:{
        selectDay(e){
            this.selectedDay = e.day;
        }
    },
    template:`
    <div class="container">
        <div class="calendar">
            <day-element :selected="selectedDay == day.dayname" @select-day="selectDay" v-for="day in calendar.days" :day="day" :key="day.dayname"></day-element>
        </div>
        <event-input v-if="selectedDay" :day="selectedDay"></event-input>
    </div>
    `
})

new Vue({ 
    el:"#app",
    data:{
        selectedDay:'',
        calendar:{
            days:[
                {  dayname:"monday", events: [ { name:"tandarts" },{ name:"hond uitlaten" } ] },
                {  dayname:"tuesday", events: [ { name:"tandarts" } ] },
                {  dayname:"wednesday", events: [ { name:"tandarts" } ] },
                {  dayname:"thursday", events: [ { name:"tandarts" } ] },
                {  dayname:"friday", events: [ { name:"tandarts" } ] },
                {  dayname:"saturday", events: [ ] },
                {  dayname:"sunday", events: [ { name:"tandarts" } ] }
            ]
        }
    }
})