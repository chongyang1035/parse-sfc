<template>
  <div class="px-3 pt-4">
    <gwms-in-stock-detail-stocks />
    <el-divider />
    <gwms-part-of-detail :title="$t('product.detailPartTitle.inventoryLocationsDetails')" :icon="'package'">
      <template v-slot:title-slot>
        <jm-tabs :default-value="realChioceTab?.value">
          <jm-tabs-list :fullWidth="true">
            <jm-tabs-trigger v-for="item in tabs" :key="item.value" :value="item.value" size="sm" @click="onTabClick(item)">
              {{ item.label }}
            </jm-tabs-trigger>
          </jm-tabs-list>
        </jm-tabs>
      </template>
      <template v-slot:content-slot>
        <gwms-inventory-locations :tableData="inventoryLocationsMock[0]?.list ?? []"></gwms-inventory-locations>
      </template>
    </gwms-part-of-detail>
    <el-divider />
    <gwms-part-of-detail :title="$t('product.detailPartTitle.outboundTrend')" :icon="'linear-statistic'">
      <template v-slot:content-slot>
        <gwms-customer-order-trend :tabs="trendTabs"> </gwms-customer-order-trend>
      </template>
    </gwms-part-of-detail>
    <el-divider />
    <gwms-part-of-detail :title="$t('product.detailPartTitle.latestOrders')" :icon="'file-06'">
      <template v-slot:title-slot>
        <el-button link type="primary">{{ $t('product.allOrders') }}</el-button>
      </template>
      <template v-slot:content-slot>
        <gwms-product-orders></gwms-product-orders>
      </template>
    </gwms-part-of-detail>
    <el-divider />
    <gwms-part-of-detail :title="$t('product.detailPartTitle.inventoryHistories')" :icon="'clock'">
      <template v-slot:title-slot>
        <el-button link type="primary">{{ $t('product.allHistories') }}</el-button>
      </template>
      <template v-slot:content-slot>
        <gwms-inventory-history :inventory-history-list="inventoryHistoryMock"></gwms-inventory-history>
      </template>
    </gwms-part-of-detail>
  </div>
</template>
<script setup lang="ts">
import type { LabelAndValueType } from '@/interface';
import { GwmsInStockInventoryMock } from '@/mock';
import type { GwmsTrendTabItem } from '@/pages/gwms-customer/gwms-customer-detail/components/gwms-trend-tab';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const trendTabs: Array<GwmsTrendTabItem> = [
  {
    label: t('customer.12months'),
    value: GwmsCustomerOrderTrendType.year
  },
  {
    label: t('customer.3months'),
    value: GwmsCustomerOrderTrendType.quarter
  },
  {
    label: t('customer.30days'),
    value: GwmsCustomerOrderTrendType.month
  },
  {
    label: t('customer.7days'),
    value: GwmsCustomerOrderTrendType.week
  },
  {
    label: t('customer.24hours'),
    value: GwmsCustomerOrderTrendType.day
  }
];

const inventoryHistoryMock = ref(InventoryHistoryMock);

const inventoryLocationsMock = ref(GwmsInStockInventoryMock);

const tabs = ref<LabelAndValueType[]>([
  { label: t('inventory.dropShipping'), value: 'dropShipping' },
  { label: t('inventory.fbaRemoval'), value: 'fbaRemoval' },
  { label: t('inventory.return'), value: 'return' }
]);

const realChioceTab = ref<LabelAndValueType>(tabs.value[0]);

const onTabClick = (params: LabelAndValueType): void => {};
</script>
