// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nest/market-models/mono/monoMarket.proto

package mono

import (
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// Item defines an item on the mono marketplace, listed by a mono seller
type Item struct {
	ItemId      string       `protobuf:"bytes,1,opt,name=itemId,proto3" json:"itemId,omitempty"`
	Title       string       `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Description string       `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	SellerId    string       `protobuf:"bytes,4,opt,name=sellerId,proto3" json:"sellerId,omitempty"`
	MinPrice    []types.Coin `protobuf:"bytes,5,rep,name=minPrice,proto3" json:"minPrice"`
	Collateral  []types.Coin `protobuf:"bytes,6,rep,name=collateral,proto3" json:"collateral"`
}

func (m *Item) Reset()         { *m = Item{} }
func (m *Item) String() string { return proto.CompactTextString(m) }
func (*Item) ProtoMessage()    {}
func (*Item) Descriptor() ([]byte, []int) {
	return fileDescriptor_12b9bb8f9ac92196, []int{0}
}
func (m *Item) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Item) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Item.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Item) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Item.Merge(m, src)
}
func (m *Item) XXX_Size() int {
	return m.Size()
}
func (m *Item) XXX_DiscardUnknown() {
	xxx_messageInfo_Item.DiscardUnknown(m)
}

var xxx_messageInfo_Item proto.InternalMessageInfo

func (m *Item) GetItemId() string {
	if m != nil {
		return m.ItemId
	}
	return ""
}

func (m *Item) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *Item) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Item) GetSellerId() string {
	if m != nil {
		return m.SellerId
	}
	return ""
}

func (m *Item) GetMinPrice() []types.Coin {
	if m != nil {
		return m.MinPrice
	}
	return nil
}

func (m *Item) GetCollateral() []types.Coin {
	if m != nil {
		return m.Collateral
	}
	return nil
}

// SellOrder defines the sell order placed by a seller in the mono marketplace
type SellOrder struct {
	SellOrderId string `protobuf:"bytes,1,opt,name=sellOrderId,proto3" json:"sellOrderId,omitempty"`
	SellerId    string `protobuf:"bytes,2,opt,name=sellerId,proto3" json:"sellerId,omitempty"`
	ItemId      string `protobuf:"bytes,3,opt,name=itemId,proto3" json:"itemId,omitempty"`
}

func (m *SellOrder) Reset()         { *m = SellOrder{} }
func (m *SellOrder) String() string { return proto.CompactTextString(m) }
func (*SellOrder) ProtoMessage()    {}
func (*SellOrder) Descriptor() ([]byte, []int) {
	return fileDescriptor_12b9bb8f9ac92196, []int{1}
}
func (m *SellOrder) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *SellOrder) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_SellOrder.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *SellOrder) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SellOrder.Merge(m, src)
}
func (m *SellOrder) XXX_Size() int {
	return m.Size()
}
func (m *SellOrder) XXX_DiscardUnknown() {
	xxx_messageInfo_SellOrder.DiscardUnknown(m)
}

var xxx_messageInfo_SellOrder proto.InternalMessageInfo

func (m *SellOrder) GetSellOrderId() string {
	if m != nil {
		return m.SellOrderId
	}
	return ""
}

func (m *SellOrder) GetSellerId() string {
	if m != nil {
		return m.SellerId
	}
	return ""
}

func (m *SellOrder) GetItemId() string {
	if m != nil {
		return m.ItemId
	}
	return ""
}

// BuyOrder defines the buy order placed by a buyer in the mono Marketplace
type BuyOrder struct {
	BuyOrderId string `protobuf:"bytes,1,opt,name=buyOrderId,proto3" json:"buyOrderId,omitempty"`
	BuyerId    string `protobuf:"bytes,2,opt,name=buyerId,proto3" json:"buyerId,omitempty"`
	ItemId     string `protobuf:"bytes,3,opt,name=itemId,proto3" json:"itemId,omitempty"`
}

func (m *BuyOrder) Reset()         { *m = BuyOrder{} }
func (m *BuyOrder) String() string { return proto.CompactTextString(m) }
func (*BuyOrder) ProtoMessage()    {}
func (*BuyOrder) Descriptor() ([]byte, []int) {
	return fileDescriptor_12b9bb8f9ac92196, []int{2}
}
func (m *BuyOrder) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *BuyOrder) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_BuyOrder.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *BuyOrder) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BuyOrder.Merge(m, src)
}
func (m *BuyOrder) XXX_Size() int {
	return m.Size()
}
func (m *BuyOrder) XXX_DiscardUnknown() {
	xxx_messageInfo_BuyOrder.DiscardUnknown(m)
}

var xxx_messageInfo_BuyOrder proto.InternalMessageInfo

func (m *BuyOrder) GetBuyOrderId() string {
	if m != nil {
		return m.BuyOrderId
	}
	return ""
}

func (m *BuyOrder) GetBuyerId() string {
	if m != nil {
		return m.BuyerId
	}
	return ""
}

func (m *BuyOrder) GetItemId() string {
	if m != nil {
		return m.ItemId
	}
	return ""
}

func init() {
	proto.RegisterType((*Item)(nil), "crowlabs.epsilon.nest.marketmodels.mono.Item")
	proto.RegisterType((*SellOrder)(nil), "crowlabs.epsilon.nest.marketmodels.mono.SellOrder")
	proto.RegisterType((*BuyOrder)(nil), "crowlabs.epsilon.nest.marketmodels.mono.BuyOrder")
}

func init() {
	proto.RegisterFile("nest/market-models/mono/monoMarket.proto", fileDescriptor_12b9bb8f9ac92196)
}

var fileDescriptor_12b9bb8f9ac92196 = []byte{
	// 384 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x52, 0x3d, 0x6f, 0x1a, 0x41,
	0x10, 0xbd, 0xe3, 0x2b, 0xb0, 0x74, 0x2b, 0x14, 0x5d, 0x28, 0x36, 0x88, 0x26, 0x34, 0xec, 0x8a,
	0x44, 0x4a, 0x93, 0x22, 0x12, 0xa9, 0x28, 0xa2, 0x20, 0xd2, 0x45, 0x69, 0xee, 0x63, 0x44, 0x56,
	0xd9, 0xbd, 0x41, 0xbb, 0x8b, 0x6d, 0xfe, 0x85, 0x7f, 0x16, 0x25, 0xa5, 0x2b, 0xcb, 0x82, 0x3f,
	0xe0, 0x9f, 0x60, 0xdd, 0x07, 0xe7, 0xb3, 0x25, 0x24, 0x37, 0xab, 0x79, 0x6f, 0xf5, 0x66, 0xe6,
	0x8d, 0x1e, 0x99, 0xa4, 0x60, 0x9d, 0xd0, 0xa1, 0xf9, 0x0f, 0x6e, 0xaa, 0x31, 0x01, 0x65, 0x85,
	0xc6, 0x14, 0xf3, 0xe7, 0x67, 0x4e, 0xf3, 0x8d, 0x41, 0x87, 0xf4, 0x53, 0x6c, 0xf0, 0x5a, 0x85,
	0x91, 0xe5, 0xb0, 0xb1, 0x52, 0x61, 0xca, 0x33, 0x29, 0x2f, 0xa4, 0x85, 0x92, 0x67, 0xa2, 0x21,
	0x8b, 0xd1, 0x6a, 0xb4, 0x22, 0x0a, 0x2d, 0x88, 0xab, 0x59, 0x04, 0x2e, 0x9c, 0x89, 0x18, 0x65,
	0x5a, 0x34, 0x1a, 0x0e, 0xd6, 0xb8, 0xc6, 0xbc, 0x14, 0x59, 0x55, 0xb0, 0xe3, 0x47, 0x9f, 0xb4,
	0x16, 0x0e, 0x34, 0x7d, 0x4f, 0x3a, 0xd2, 0x81, 0x5e, 0x24, 0x81, 0x3f, 0xf2, 0x27, 0xbd, 0x55,
	0x89, 0xe8, 0x80, 0xb4, 0x9d, 0x74, 0x0a, 0x82, 0x46, 0x4e, 0x17, 0x80, 0x8e, 0x48, 0x3f, 0x01,
	0x1b, 0x1b, 0xb9, 0x71, 0x12, 0xd3, 0xa0, 0x99, 0xff, 0xd5, 0x29, 0x3a, 0x24, 0x5d, 0x0b, 0x4a,
	0x81, 0x59, 0x24, 0x41, 0x2b, 0xff, 0xae, 0x30, 0xfd, 0x46, 0xba, 0x5a, 0xa6, 0x4b, 0x23, 0x63,
	0x08, 0xda, 0xa3, 0xe6, 0xa4, 0xff, 0xf9, 0x03, 0x2f, 0xb6, 0xe7, 0xd9, 0xf6, 0xbc, 0xdc, 0x9e,
	0xff, 0x40, 0x99, 0xce, 0x5b, 0xfb, 0xfb, 0x8f, 0xde, 0xaa, 0x12, 0xd0, 0xef, 0x84, 0xc4, 0xa8,
	0x54, 0xe8, 0xc0, 0x84, 0x2a, 0xe8, 0xbc, 0x4d, 0x5e, 0x93, 0x8c, 0x43, 0xd2, 0xfb, 0x0d, 0x4a,
	0xfd, 0x32, 0x09, 0x98, 0xcc, 0x88, 0x3d, 0x83, 0xca, 0x7b, 0x9d, 0x7a, 0x61, 0xa4, 0xf1, 0xca,
	0xc8, 0xf3, 0xd1, 0x9a, 0xf5, 0xa3, 0x8d, 0xff, 0x92, 0xee, 0x7c, 0xbb, 0x2b, 0x26, 0x30, 0x42,
	0xa2, 0xb2, 0xae, 0x06, 0xd4, 0x18, 0x1a, 0x90, 0x77, 0xd1, 0x76, 0x57, 0x6b, 0x7f, 0x86, 0x97,
	0xba, 0xcf, 0x97, 0xfb, 0x23, 0xf3, 0x0f, 0x47, 0xe6, 0x3f, 0x1c, 0x99, 0x7f, 0x7b, 0x62, 0xde,
	0xe1, 0xc4, 0xbc, 0xbb, 0x13, 0xf3, 0xfe, 0x7c, 0x5d, 0x4b, 0xf7, 0x6f, 0x1b, 0xf1, 0x18, 0xb5,
	0xc8, 0x72, 0x33, 0xcd, 0x82, 0x23, 0xca, 0xe0, 0x88, 0x1b, 0x71, 0x21, 0x75, 0x51, 0x27, 0x0f,
	0xc3, 0x97, 0xa7, 0x00, 0x00, 0x00, 0xff, 0xff, 0x7f, 0x73, 0x73, 0x53, 0x97, 0x02, 0x00, 0x00,
}

func (m *Item) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Item) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Item) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Collateral) > 0 {
		for iNdEx := len(m.Collateral) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Collateral[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintMonoMarket(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x32
		}
	}
	if len(m.MinPrice) > 0 {
		for iNdEx := len(m.MinPrice) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.MinPrice[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintMonoMarket(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x2a
		}
	}
	if len(m.SellerId) > 0 {
		i -= len(m.SellerId)
		copy(dAtA[i:], m.SellerId)
		i = encodeVarintMonoMarket(dAtA, i, uint64(len(m.SellerId)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Description) > 0 {
		i -= len(m.Description)
		copy(dAtA[i:], m.Description)
		i = encodeVarintMonoMarket(dAtA, i, uint64(len(m.Description)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Title) > 0 {
		i -= len(m.Title)
		copy(dAtA[i:], m.Title)
		i = encodeVarintMonoMarket(dAtA, i, uint64(len(m.Title)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.ItemId) > 0 {
		i -= len(m.ItemId)
		copy(dAtA[i:], m.ItemId)
		i = encodeVarintMonoMarket(dAtA, i, uint64(len(m.ItemId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *SellOrder) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *SellOrder) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *SellOrder) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.ItemId) > 0 {
		i -= len(m.ItemId)
		copy(dAtA[i:], m.ItemId)
		i = encodeVarintMonoMarket(dAtA, i, uint64(len(m.ItemId)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.SellerId) > 0 {
		i -= len(m.SellerId)
		copy(dAtA[i:], m.SellerId)
		i = encodeVarintMonoMarket(dAtA, i, uint64(len(m.SellerId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.SellOrderId) > 0 {
		i -= len(m.SellOrderId)
		copy(dAtA[i:], m.SellOrderId)
		i = encodeVarintMonoMarket(dAtA, i, uint64(len(m.SellOrderId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *BuyOrder) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *BuyOrder) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *BuyOrder) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.ItemId) > 0 {
		i -= len(m.ItemId)
		copy(dAtA[i:], m.ItemId)
		i = encodeVarintMonoMarket(dAtA, i, uint64(len(m.ItemId)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.BuyerId) > 0 {
		i -= len(m.BuyerId)
		copy(dAtA[i:], m.BuyerId)
		i = encodeVarintMonoMarket(dAtA, i, uint64(len(m.BuyerId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.BuyOrderId) > 0 {
		i -= len(m.BuyOrderId)
		copy(dAtA[i:], m.BuyOrderId)
		i = encodeVarintMonoMarket(dAtA, i, uint64(len(m.BuyOrderId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintMonoMarket(dAtA []byte, offset int, v uint64) int {
	offset -= sovMonoMarket(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Item) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.ItemId)
	if l > 0 {
		n += 1 + l + sovMonoMarket(uint64(l))
	}
	l = len(m.Title)
	if l > 0 {
		n += 1 + l + sovMonoMarket(uint64(l))
	}
	l = len(m.Description)
	if l > 0 {
		n += 1 + l + sovMonoMarket(uint64(l))
	}
	l = len(m.SellerId)
	if l > 0 {
		n += 1 + l + sovMonoMarket(uint64(l))
	}
	if len(m.MinPrice) > 0 {
		for _, e := range m.MinPrice {
			l = e.Size()
			n += 1 + l + sovMonoMarket(uint64(l))
		}
	}
	if len(m.Collateral) > 0 {
		for _, e := range m.Collateral {
			l = e.Size()
			n += 1 + l + sovMonoMarket(uint64(l))
		}
	}
	return n
}

func (m *SellOrder) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.SellOrderId)
	if l > 0 {
		n += 1 + l + sovMonoMarket(uint64(l))
	}
	l = len(m.SellerId)
	if l > 0 {
		n += 1 + l + sovMonoMarket(uint64(l))
	}
	l = len(m.ItemId)
	if l > 0 {
		n += 1 + l + sovMonoMarket(uint64(l))
	}
	return n
}

func (m *BuyOrder) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.BuyOrderId)
	if l > 0 {
		n += 1 + l + sovMonoMarket(uint64(l))
	}
	l = len(m.BuyerId)
	if l > 0 {
		n += 1 + l + sovMonoMarket(uint64(l))
	}
	l = len(m.ItemId)
	if l > 0 {
		n += 1 + l + sovMonoMarket(uint64(l))
	}
	return n
}

func sovMonoMarket(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozMonoMarket(x uint64) (n int) {
	return sovMonoMarket(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Item) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMonoMarket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Item: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Item: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ItemId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMonoMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ItemId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Title", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMonoMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Title = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Description", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMonoMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Description = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SellerId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMonoMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SellerId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MinPrice", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthMonoMarket
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.MinPrice = append(m.MinPrice, types.Coin{})
			if err := m.MinPrice[len(m.MinPrice)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Collateral", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthMonoMarket
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Collateral = append(m.Collateral, types.Coin{})
			if err := m.Collateral[len(m.Collateral)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipMonoMarket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *SellOrder) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMonoMarket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: SellOrder: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: SellOrder: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SellOrderId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMonoMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SellOrderId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SellerId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMonoMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SellerId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ItemId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMonoMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ItemId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipMonoMarket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *BuyOrder) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMonoMarket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: BuyOrder: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: BuyOrder: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BuyOrderId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMonoMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BuyOrderId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BuyerId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMonoMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BuyerId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ItemId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMonoMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ItemId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipMonoMarket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthMonoMarket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipMonoMarket(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowMonoMarket
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowMonoMarket
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowMonoMarket
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthMonoMarket
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupMonoMarket
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthMonoMarket
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthMonoMarket        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowMonoMarket          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupMonoMarket = fmt.Errorf("proto: unexpected end of group")
)
