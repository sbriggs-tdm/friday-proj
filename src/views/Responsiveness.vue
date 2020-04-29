<template>
  <v-container>
    <h1>Dashboard</h1>
<!--     <v-row>
        <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                    <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-card-actions>
                <v-btn text>Button</v-btn>
            </v-card-actions>
        </v-card>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" lg="3" >
        <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                    <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-card-actions>
                <v-btn text>Button</v-btn>
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row> -->

    <v-row>
      <v-col cols="12" md="8">
        <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                    <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-card-actions>
                <v-btn text>Button</v-btn>
            </v-card-actions>
        </v-card>
        
      </v-col>
      <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                    <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-card-actions>
                <v-btn text>Button</v-btn>
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row id="below-the-fold" v-intersect="showMoreContent">
      <v-col cols="12" md="8">
                <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <!-- <div class="overline mb-4">OVERLINE</div> -->
                    <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                    <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-card-actions>
                <v-btn text>Button</v-btn>
            </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <!-- <div class="overline mb-4">OVERLINE</div> -->
                    <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                    <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-card-actions>
                <v-btn text>Button</v-btn>
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row>


    <!-- <v-snackbar v-model="snackbar" :left="$vuetify.breakpoint.lgAndUp">
      You have selected {{ selectedEmployee.name }},
      {{ selectedEmployee.title }}
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar> -->
  </v-container>
</template>

<script>
/* import EmployeesTable from '../components/EmployeesTable'
import EventTimeline from '../components/EventTimeline'
import SalesGraph from '../components/SalesGraph'
import StatisticCard from '../components/StatisticCard' */

/* import employeesData from '../data/employees.json'
import timelineData from '../data/timeline.json'
import salesData from '../data/sales.json'
import statisticsData from '../data/statistics.json' */

export default {
  name: 'DashboardPage',
  components: {
/*     EmployeesTable,
    EventTimeline,
    SalesGraph,
    StatisticCard */
  },
  data() {
    return {
      /* employees: employeesData, */
      loadNewContent: false,
      /* sales: salesData, */
      selectedEmployee: {
        name: '',
        title: ''
      },
      snackbar: false,
     /*  statistics: statisticsData,
      timeline: timelineData */
    }
  },
  methods: {
    setEmployee(event) {
      this.snackbar = true
      this.selectedEmployee.name = event.name
      this.selectedEmployee.title = event.title
    },
    showMoreContent(entries) {
      this.loadNewContent = entries[0].isIntersecting
    }
  }
}
</script>
