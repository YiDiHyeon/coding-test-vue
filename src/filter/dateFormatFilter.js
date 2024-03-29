import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('dateFormatNullFilter', (long_time, format) => {
  return !long_time ? '-' : dayjs(long_time).format(format)
})
