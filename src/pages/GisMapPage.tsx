import React, { useEffect, useState } from 'react';
import { mapService } from '../services/api';
import { LeafletMap } from '../components/LeafletMap';
import { RiskBadge } from '../components/RiskBadge';
import { MapPin, Search, Sparkles, ArrowRight, X, RotateCcw, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const GisMapPage: React.FC = () => {
  const [mapData, setMapData] = useState<{ markers: any[]; similarityLinks: any[] }>({
    markers: [],
    similarityLinks: [],
  });
  const [selectedMarker, setSelectedMarker] = useState<any | null>(null);
  const [riskFilter, setRiskFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [mapCenter, setMapCenter] = useState<[number, number]>([20.5937, 78.9629]);
  const [zoomLevel, setZoomLevel] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const fetchMapWorks = async () => {
    setIsLoading(true);
    try {
      const res = await mapService.getMapWorks({
        riskLevel: riskFilter || undefined,
        category: categoryFilter || undefined,
        limit: 500,
      });
      if (res.data.success) {
        setMapData(res.data.data);
      }
    } catch (e) {
      console.error('Error loading map data:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMapWorks();
  }, [riskFilter, categoryFilter]);

  // Filtered markers by search query
  const filteredMarkers = mapData.markers.filter((m) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      m.workId.toLowerCase().includes(q) ||
      m.workName.toLowerCase().includes(q) ||
      m.district.toLowerCase().includes(q)
    );
  });

  const handleFocusHeroCluster = () => {
    setMapCenter([18.525, 73.86]);
    setZoomLevel(13);
    const hero = mapData.markers.find((m) => m.workId === 'MPLADS-00421');
    if (hero) setSelectedMarker(hero);
  };

  const handleResetNationalView = () => {
    setMapCenter([20.5937, 78.9629]);
    setZoomLevel(5);
    setSelectedMarker(null);
  };

  const hasActiveFilters = Boolean(riskFilter || categoryFilter || searchQuery);

  const clearAllFilters = () => {
    setRiskFilter('');
    setCategoryFilter('');
    setSearchQuery('');
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Header & Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 glass-panel p-3 sm:p-4 rounded-2xl border border-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-base sm:text-xl md:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-400" />
              GIS Risk Spatial Intelligence
            </h1>
            <p className="text-[10px] sm:text-xs text-slate-400 hidden xs:block sm:block">
              Interactive geospatial mapping with risk severity overlays
            </p>
          </div>

          <div className="sm:hidden flex items-center gap-1.5">
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              {filteredMarkers.length} works
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleFocusHeroCluster}
            className="flex-1 sm:flex-none px-3 py-1.5 rounded-xl bg-red-950/80 hover:bg-red-900/70 border border-red-500/50 text-red-300 text-[11px] sm:text-xs font-semibold shadow-[0_0_15px_rgba(239,68,68,0.25)] transition-all flex items-center justify-center gap-1.5 shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Demo Cluster</span>
          </button>

          <button
            onClick={handleResetNationalView}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] sm:text-xs font-semibold transition-colors flex items-center justify-center gap-1 shrink-0"
          >
            <RotateCcw className="w-3 h-3 text-slate-400" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Filter Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {/* Search */}
        <div className="col-span-2 sm:col-span-1 relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search work ID, district..."
            className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2.5 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Risk Filter */}
        <div>
          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className={`w-full bg-slate-900/90 border rounded-xl px-2.5 py-2 text-xs focus:outline-none focus:border-cyan-500 ${
              riskFilter ? 'border-cyan-500/60 text-cyan-300' : 'border-slate-800 text-slate-200'
            }`}
          >
            <option value="">All Risk Tiers</option>
            <option value="HIGH">High Risk (70–100)</option>
            <option value="MEDIUM">Medium Risk (40–69)</option>
            <option value="LOW">Low Risk (0–39)</option>
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className={`w-full bg-slate-900/90 border rounded-xl px-2.5 py-2 text-xs focus:outline-none focus:border-cyan-500 ${
              categoryFilter ? 'border-cyan-500/60 text-cyan-300' : 'border-slate-800 text-slate-200'
            }`}
          >
            <option value="">All Categories</option>
            <option value="Community Infrastructure">Community</option>
            <option value="Roads & Bridges">Roads</option>
            <option value="Water Facilities & RO Plants">Water</option>
            <option value="Schools & Educational Facilities">Schools</option>
            <option value="Public Health Centres">Health</option>
            <option value="Drainage & Sanitation">Drainage</option>
            <option value="Solar & Street Lighting">Solar</option>
          </select>
        </div>

        {/* Markers Count & Clear */}
        <div className="hidden sm:flex items-center justify-between px-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs">
          <span className="text-slate-400">Showing:</span>
          <div className="flex items-center gap-1.5">
            <span className="font-mono font-bold text-cyan-400">{filteredMarkers.length}</span>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-[10px] text-red-400 hover:text-red-300 font-medium ml-1"
                title="Clear all filters"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Map & Interactive Flyout Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 relative">
        {/* Leaflet Map Frame */}
        <div className={`transition-all duration-300 ${selectedMarker ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
          <LeafletMap
            markers={filteredMarkers}
            similarityLinks={mapData.similarityLinks}
            center={mapCenter}
            zoom={zoomLevel}
            height="calc(100vh - 230px)"
            onMarkerClick={(marker) => setSelectedMarker(marker)}
            selectedMarkerId={selectedMarker?.id}
          />
        </div>

        {/* Selected Marker Detail Flyout Sidebar (Desktop) & Floating Sheet (Mobile) */}
        {selectedMarker && (
          <div className="lg:col-span-4 glass-panel p-4 sm:p-5 rounded-2xl border border-cyan-500/30 flex flex-col justify-between space-y-3 animate-slideUp fixed inset-x-2 bottom-[58px] sm:inset-x-4 sm:bottom-[68px] lg:static lg:inset-auto lg:bottom-auto z-40 max-h-[70vh] lg:max-h-[calc(100vh-230px)] overflow-y-auto bg-[#0B192C]/95 lg:bg-slate-900/80 backdrop-blur-xl shadow-2xl">
            {/* Mobile Sheet Drag Pill Handle */}
            <div className="lg:hidden w-10 h-1 bg-slate-600 rounded-full mx-auto mb-1" />

            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="font-mono text-xs font-bold text-cyan-400">{selectedMarker.workId}</span>
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-snug mt-0.5 line-clamp-2">
                    {selectedMarker.workName}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedMarker(null)}
                  className="text-slate-400 hover:text-white text-xs p-1.5 rounded-lg bg-slate-800/80 shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {selectedMarker.isHeroCase && (
                <div className="p-2 rounded-lg bg-red-950/60 border border-red-500/40 text-red-300 text-[11px] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-semibold">Showcase Hero Anomaly Case</span>
                </div>
              )}

              {/* Risk Badge & Action */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div>
                  <span className="text-[9px] text-slate-400 uppercase font-semibold block mb-0.5">Risk Index</span>
                  <RiskBadge score={selectedMarker.riskScore} level={selectedMarker.riskLevel} size="sm" />
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-slate-400 uppercase font-semibold block mb-0.5">Action</span>
                  <span className="text-[11px] font-bold text-cyan-300">
                    {selectedMarker.recommendedAction?.replace(/_/g, ' ') || 'VERIFICATION'}
                  </span>
                </div>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                  <span className="text-slate-500 text-[9px] block">Category</span>
                  <span className="font-semibold text-slate-200 truncate block">{selectedMarker.category}</span>
                </div>
                <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                  <span className="text-slate-500 text-[9px] block">Location</span>
                  <span className="font-semibold text-slate-200 truncate block">{selectedMarker.district}</span>
                </div>
                <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                  <span className="text-slate-500 text-[9px] block">Sanction Cost</span>
                  <span className="font-mono font-bold text-slate-200">₹{(selectedMarker.sanctionAmount / 100000).toFixed(2)} L</span>
                </div>
                <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                  <span className="text-slate-500 text-[9px] block">Status</span>
                  <span className="font-semibold text-cyan-400">{selectedMarker.status || 'ONGOING'}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate(`/works/${selectedMarker.workId}`)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Inspect Full Risk Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
